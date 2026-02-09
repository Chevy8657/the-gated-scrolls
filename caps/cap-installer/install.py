import json
import os
import shutil

ENGINE_CAP_DIR = os.path.expanduser("~/.gatedscrolls/caps")

def install(cap_source_dir):
    manifest_path = os.path.join(cap_source_dir, "manifest.json")

    if not os.path.exists(manifest_path):
        raise Exception("manifest.json missing")

    with open(manifest_path, "r") as f:
        manifest = json.load(f)

    cap_id = manifest.get("cap_id")

    if not cap_id:
        raise Exception("Invalid manifest: cap_id missing")

    target_dir = os.path.join(ENGINE_CAP_DIR, cap_id)

    if os.path.exists(target_dir):
        print("CAP already installed:", cap_id)
        return

    shutil.copytree(cap_source_dir, target_dir)

    print("CAP installed successfully:", cap_id)


if __name__ == "__main__":
    import sys
    if len(sys.argv) != 2:
        print("Usage: install.py <cap_directory>")
        exit(1)

    install(sys.argv[1])
