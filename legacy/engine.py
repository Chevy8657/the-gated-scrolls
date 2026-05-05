import os
import json
import subprocess
from typing import Dict, Any, List, Tuple

# Where CAPs live inside the repo (your "catalog" during development)
REPO_CAPS_DIR = os.path.join(os.path.dirname(__file__), "caps")

# Where CAPs install to on a machine (your "engine" location)
INSTALLED_CAPS_DIR = os.path.expanduser("~/.gatedscrolls/caps")


def _read_json(path: str) -> Dict[str, Any]:
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)


def _is_non_empty_string(v: Any) -> bool:
    return isinstance(v, str) and len(v.strip()) > 0


def validate_manifest_obj(manifest: Dict[str, Any]) -> Tuple[bool, List[str]]:
    """
    Deterministic minimal validator (v1).
    Returns: (valid, violations[])
    """
    violations: List[str] = []

    required = ["cap_id", "name", "version", "author", "description", "execution", "immutable"]
    for field in required:
        if field not in manifest:
            violations.append(f"Missing required field: {field}")

    for field in ["cap_id", "name", "version", "author", "description"]:
        if field in manifest and not _is_non_empty_string(manifest.get(field)):
            violations.append(f"Field must be a non-empty string: {field}")

    if "immutable" in manifest and not isinstance(manifest.get("immutable"), bool):
        violations.append("Field must be boolean: immutable")

    exec_obj = manifest.get("execution")
    if "execution" in manifest:
        if not isinstance(exec_obj, dict):
            violations.append("execution must be an object")
        else:
            if "entry" not in exec_obj:
                violations.append("Missing execution.entry")
            if "type" not in exec_obj:
                violations.append("Missing execution.type")
            if "type" in exec_obj and exec_obj.get("type") != "local":
                violations.append("execution.type must be 'local' (v1)")

            if "entry" in exec_obj and not _is_non_empty_string(exec_obj.get("entry")):
                violations.append("execution.entry must be a non-empty string")

    violations_sorted = sorted(violations)
    return (len(violations_sorted) == 0, violations_sorted)


def list_caps(dir_path: str) -> List[str]:
    """
    Lists CAP directories that contain a manifest.json
    """
    if not os.path.exists(dir_path):
        return []
    caps: List[str] = []
    for name in sorted(os.listdir(dir_path)):
        cap_dir = os.path.join(dir_path, name)
        if os.path.isdir(cap_dir) and os.path.exists(os.path.join(cap_dir, "manifest.json")):
            caps.append(name)
    return caps


def load_manifest(cap_dir: str) -> Dict[str, Any]:
    manifest_path = os.path.join(cap_dir, "manifest.json")
    if not os.path.exists(manifest_path):
        raise FileNotFoundError(f"manifest.json not found: {manifest_path}")
    return _read_json(manifest_path)


def execute_cap_by_path(cap_dir: str, args: List[str]) -> Dict[str, Any]:
    """
    Executes the CAP's entry file as a python script:
      python <entry> <args...>

    Returns a structured result.
    """
    manifest = load_manifest(cap_dir)
    valid, violations = validate_manifest_obj(manifest)
    if not valid:
        return {"success": False, "error": "MANIFEST_INVALID", "violations": violations}

    entry = manifest["execution"]["entry"]
    entry_path = os.path.join(cap_dir, entry)

    if not os.path.exists(entry_path):
        return {"success": False, "error": "ENTRY_NOT_FOUND", "path": entry_path}

    cmd = ["python", entry_path] + args

    try:
        proc = subprocess.run(cmd, capture_output=True, text=True, check=False)
        return {
            "success": proc.returncode == 0,
            "cap_id": manifest["cap_id"],
            "stdout": proc.stdout.strip(),
            "stderr": proc.stderr.strip(),
            "returncode": proc.returncode,
            "command": cmd,
        }
    except Exception as e:
        return {"success": False, "error": "EXEC_ERROR", "message": str(e)}


def find_cap_dir(cap_name_or_id: str) -> str:
    """
    Resolve CAP by folder name in installed caps first, then repo caps.
    """
    # installed
    installed_candidate = os.path.join(INSTALLED_CAPS_DIR, cap_name_or_id)
    if os.path.isdir(installed_candidate):
        return installed_candidate

    # repo
    repo_candidate = os.path.join(REPO_CAPS_DIR, cap_name_or_id)
    if os.path.isdir(repo_candidate):
        return repo_candidate

    raise FileNotFoundError(f"CAP not found by folder name: {cap_name_or_id}")


def main():
    print("=== Automation Station Engine (v1) ===\n")

    print("Installed CAPs:")
    for c in list_caps(INSTALLED_CAPS_DIR):
        print(f" - {c}")

    print("\nRepo CAPs:")
    for c in list_caps(REPO_CAPS_DIR):
        print(f" - {c}")

    print("\nDemo run: word-count-cap (repo)")
    try:
        cap_dir = find_cap_dir("word-count-cap")
        # This assumes word-count-cap/execute.py accepts a single argument: a text string
        result = execute_cap_by_path(cap_dir, ["Hello world from Automation Station"])
        print(json.dumps(result, indent=2))
    except Exception as e:
        print("Demo failed:", str(e))


if __name__ == "__main__":
    main()
