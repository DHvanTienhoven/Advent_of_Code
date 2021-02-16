input = [278384, 824795]

input_list = range(input[0], input[1]+1)

#part one:

def check_password(number):
    string = str(number)
    for index, char in enumerate(string):
        if index >0:
            if int(char) < int(string[index-1]):
                return False
    if string[0] == string[1] or string[1] == string[2] or string[2] == string[3] or string[3] == string[4] or string[4] ==string[5]:
        return True
    else:
        return False

def find_number_of_valid_passwords(list):
    valid_passwords = 0
    for number in list:
        if check_password(number):
            valid_passwords += 1
    return valid_passwords

print(find_number_of_valid_passwords(input_list))
print(len(input_list))

