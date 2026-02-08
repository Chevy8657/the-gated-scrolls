def execute(input_text):
    """
    CAP-TEXT-WORD-COUNT-STRICT-V1
    Deterministically counts words in provided text.
    """
    if not isinstance(input_text, str):
        return {
            "success": False,
            "error": "Input must be a string",
            "word_count": 0
        }

    words = input_text.strip().split()
    count = len(words)

    return {
        "success": True,
        "cap_id": "CAP-TEXT-WORD-COUNT-STRICT-V1",
        "word_count": count
    }


# local test authority
if __name__ == "__main__":
    test_input = "Automation Station is operational"
    result = execute(test_input)
    print(result)
