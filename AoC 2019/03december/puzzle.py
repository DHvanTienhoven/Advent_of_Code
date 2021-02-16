from input import cable_one, cable_two

#part one:

def path_cable(cable):
    path = ['0, 0']
    lr_direction = 0
    ud_direction = 0
    for dir in cable:
        steps = range(0, int(dir[1:])+1)
        if dir[0] == 'R':
            for step in steps:
                path.append(f'{lr_direction + step}, {ud_direction}')
            lr_direction += int(dir[1:])
        if dir[0] == 'U':
            for step in steps:
                path.append(f'{lr_direction}, {ud_direction + step}')
            ud_direction += int(dir[1:])
        if dir[0] == 'D':
            for step in steps:
                path.append(f'{lr_direction}, {ud_direction -step}')
            ud_direction += -int(dir[1:])
        if dir[0] == 'L':
            for step in steps:
                path.append(f'{lr_direction -step}, {ud_direction}')
            lr_direction += -int(dir[1:])
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
        steps = range(0, int(dir[1:])+1)
        if dir[0] == 'R':
            for step in steps:
                num_steps += 1
                if f'{lr_direction + step}, {ud_direction}' == intersection:
                    return num_steps
            lr_direction += int(dir[1:])
        if dir[0] == 'U':
            for step in steps:
                num_steps += 1
                if f'{lr_direction}, {ud_direction + step}' ==intersection:
                    return num_steps
            ud_direction += int(dir[1:])
        if dir[0] == 'D':
            for step in steps:
                num_steps += 1
                if f'{lr_direction}, {ud_direction -step}' == intersection:
                    return num_steps
            ud_direction += -int(dir[1:])
        if dir[0] == 'L':
            for step in steps:
                num_steps += 1
                if f'{lr_direction -step}, {ud_direction}' == intersection:
                    return num_steps
            lr_direction += -int(dir[1:])

def find_lowest_sum_of_steps(cable_1, cable_2, interscection_list):
    sums_of_steps = []
    for inters in interscection_list:
        sums_of_steps.append(find_number_of_steps(cable_1, inters) + find_number_of_steps(cable_2, inters))
    sums_of_steps.remove(0)
    return min(sums_of_steps)

#right answers but will attempt some refactoring another time