from input import int_code


#part one:

def find_start_code(num_list):
    for i, x in enumerate(num_list):
        if i % 4 == 0:
            if x == 1:
                num_list[num_list[i+3]] = (num_list[num_list[i+2]] + num_list[num_list[i+1]])
            if x == 2:
                num_list[num_list[i+3]] = (num_list[num_list[i+2]] * num_list[num_list[i+1]])
            if x == 99:
                return num_list[0]

#print(find_start_code(int_code))


def find_inputs(num_list):
    list_one = range(0, 100)
    list_two = range(0, 100)
    for i in list_one:
        for j in list_two:
            work_list = num_list.copy()
            work_list[1] = i
            work_list[2] = j
            if find_start_code(work_list) == 19690720:
                return i * 100 + j

print(find_inputs(int_code))