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
    return list(set_one &set_two)

def find_smallest_manhattan_distance(cable_1, cable_2):
    l = find_intersections(cable_1, cable_2)
    manhattan_distances = []
    for item in l:
        points = item.split(', ')
        manhattan_distances.append(abs(int(points[0])) + abs(int(points[1])))
    manhattan_distances.remove(0)
    return min(manhattan_distances)

print(find_smallest_manhattan_distance(cable_one, cable_two))
