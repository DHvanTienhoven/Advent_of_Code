from input import module_mass

#part 1

def get_fuel_for_modules(module_mass_list):
    answer = 0
    for mod in module_mass_list:
        answer += int(mod/3)-2
    return answer

print(get_fuel_for_modules(module_mass))

#part 2

def get_fuel_for_mass(num):
    answer = int(num/3)-2
    if answer < 0:
        return 0
    else:
        return answer + get_fuel_for_mass(answer)

def get_total_fuel(module_mass_list):
    answer = 0
    for mod in module_mass_list:
        answer += get_fuel_for_mass(mod)
    return answer

print(get_total_fuel(module_mass))

#finished