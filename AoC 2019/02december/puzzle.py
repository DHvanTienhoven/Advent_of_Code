from input import int_code


#part one:

def find_start_code():
    for i, x in enumerate(int_code):
        if i % 4 == 0:
            if x == 1:
                int_code[int_code[i+3]] = (int_code[int_code[i+2]] +int_code[int_code[i+1]])
            if x == 2:
                int_code[int_code[i+3]] = (int_code[int_code[i+2]] * int_code[int_code[i+1]])
            if x == 99:
                return int_code[0]

print(find_start_code())


#part two:

