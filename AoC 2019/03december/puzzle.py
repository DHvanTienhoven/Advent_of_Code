from input import cable_one, cable_two

#part one:

def path_cable(cable):
    path = ['0, 0']
    lr_direction = 0
    ud_direction = 0
    for dir in cable:
        dimension = dir[0]
        num_steps = int(dir[1:])
        steps = range(0, num_steps+1)
        for step in steps:
            if dimension == 'R':
                new_str = f'{lr_direction + step}, {ud_direction}'
            if dimension == 'U':
                new_str = f'{lr_direction}, {ud_direction + step}'
            if dimension == 'D':
                new_str = f'{lr_direction}, {ud_direction -step}'
            if dimension == 'L':
                new_str = f'{lr_direction -step}, {ud_direction}'
            path.append(new_str)
        if dimension == 'R':
            lr_direction += num_steps
        if dimension == 'U':
            ud_direction += num_steps
        if dimension == 'D':
            ud_direction += -num_steps
        if dimension == 'L':
            lr_direction += -num_steps
    return path


def find_intersections(cable_1, cable_2):
    set_one, set_two = set(path_cable(cable_1)), set(path_cable(cable_2))
    return list(set_one & set_two)

def find_smallest_manhattan_distance(cable_1, cable_2):
    l = find_intersections(cable_1, cable_2)
    manhattan_distances = []
    for item in l:
        points = item.split(', ')
        manhattan_distances.append(abs(int(points[0])) + abs(int(points[1])))
    manhattan_distances.remove(0)
    return min(manhattan_distances)

#part 2:

intersections = find_intersections(cable_one, cable_two)

def find_number_of_steps(cable, intersection):
    num_steps = 0
    lr_direction = 0
    ud_direction = 0
    for dir in cable:
        num_steps += -1
        dir_dim = dir[0]
        dir_num = int(dir[1:])
        steps = range(0, dir_num+1)
        for step in steps:
            num_steps += 1
            if dir_dim == 'R':
                compare_str = f'{lr_direction + step}, {ud_direction}'
            if dir_dim == 'U':
                compare_str = f'{lr_direction}, {ud_direction + step}' 
            if dir_dim == 'D':
                compare_str = f'{lr_direction}, {ud_direction -step}'
            if dir_dim == 'L':
                compare_str = f'{lr_direction -step}, {ud_direction}'
            if compare_str == intersection:
                return num_steps
        if dir_dim == 'R':
            lr_direction += dir_num
        if dir_dim == 'U':
            ud_direction += dir_num
        if dir_dim == 'D':
            ud_direction += -dir_num
        if dir_dim == 'L':
            lr_direction += -dir_num


def find_lowest_sum_of_steps(cable_1, cable_2, interscection_list):
    sums_of_steps = []
    for inters in interscection_list:
        sums_of_steps.append(find_number_of_steps(cable_1, inters) + find_number_of_steps(cable_2, inters))
    sums_of_steps.remove(0)
    return min(sums_of_steps)
