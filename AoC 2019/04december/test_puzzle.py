from puzzle import input_list, find_number_of_valid_passwords, find_number_of_valid_passwords_extra

def test_find_number_of_valid_passwords():
    assert find_number_of_valid_passwords(input_list) == 921

def test_find_number_of_valid_passwords_extra():
    assert find_number_of_valid_passwords_extra(input_list) == 603