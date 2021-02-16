input = [278384, 824795]

input_list = range(input[0], input[1]+1)

#part one:

def check_password(number):
    string = str(number)
    for index, char in enumerate(string):
        if index >0:
            if int(char) < int(string[index-1]):
                return False
    for i in range(len(string)):
        for j in range(i + 1,len(string)): 
            if(string[i] == string[j]):
                return True
    else:
        return False

def find_number_of_valid_passwords(list):
    valid_passwords = 0
    for number in list:
        if check_password(number):
            valid_passwords += 1
    return valid_passwords

#part 2:

def check_password_extra_condition(number):
    string = str(number)
    for index, char in enumerate(string):
        if index >0:
            if int(char) < int(string[index-1]):
                return False
    m = dict()
    for i in range(len(string)):
        m[string[i]] = m.get(string[i],0) + 1
    for i in m.values(): 
        if i == 2:
            return True
    else:
        return False

def find_number_of_valid_passwords_extra(list):
    valid_passwords = 0
    for number in list:
        if check_password_extra_condition(number):
            valid_passwords += 1
    return valid_passwords

print(find_number_of_valid_passwords_extra(input_list))