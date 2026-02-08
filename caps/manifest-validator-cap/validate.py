import json

CAP_ID = "CAP-FOUNDATION-MANIFEST-VALIDATOR-STRICT-V1"

REQUIRED_FIELDS = [
    "cap_id",
    "name",
    "version",
    "author",
    "description",
    "execution",
    "immutable"
]

def validate_manifest(manifest):
    violations = []

    for field in REQUIRED_FIELDS:
        if field not in manifest:
            violations.append(f"Missing required field: {field}")

    if "execution" in manifest:
        execution = manifest["execution"]

        if not isinstance(execution, dict):
            violations.append("execution must be an object")
        else:
            if "entry" not in execution:
                violations.append("Missing execution.entry")

            if "type" not in execution:
                violations.append("Missing execution.type")

    valid = len(violations) == 0

    return {
        "success": True,
        "cap_id": CAP_ID,
        "valid": valid,
        "violations": violations
    }


if __name__ == "__main__":
    test_manifest = {
        "cap_id": "TEST",
        "name": "Test CAP"
    }

    result = validate_manifest(test_manifest)

    print(result)
