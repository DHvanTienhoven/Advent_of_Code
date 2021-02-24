"""dit is de oplossing voor de puzzel van Advent of Code 2019, dag 1: https://adventofcode.com/2019/day/1
de gegeven puzzel input heb ik als lijst geïmporteerd en gebruikt in onderstaande functies 
(voor structuur zie: https://github.com/DHvanTienhoven/Advent_of_Code/tree/main/AoC%202019/01december)"""

#part 1
#deel één van de puzzel was redelijk straightforward en bevat geen recursie.
#ik heb een lijst met modules die een bepaald gewicht hebben en moet berekenen hoe veel brandstof nodig is voor die modules - op basis van het gewicht.

def get_fuel_for_modules(module_mass_list):
    answer = 0
    for mod in module_mass_list:
        answer += int(mod/3)-2
    return answer


#part 2
# in deel twee telt ook het gewicht van de brandstof mee. En moet ik berekenen hoeveel brandstof nodig is voor de modules èn voor de brandstof.
# Als het benodigde gewicht onder nul komt moet ik 0 terug geven. dat is in het geval van get_fuel_for_mass() de basecase
# De recursive case treedt op wanneer de benodigde brandstof boven 0 is, en er vervolgens berekend moet worden hoeveel brandstof er voor die brandstof nodig is. 
# Om dit te doen roept de functie zichzelf weer aan

def get_fuel_for_mass(num):  
    answer = int(num/3)-2
    if answer < 0:          #basecase
        return 0
    else:                   #recursive case
        return answer + get_fuel_for_mass(answer)

def get_total_fuel(module_mass_list):
    answer = 0
    for mod in module_mass_list:
        answer += get_fuel_for_mass(mod)
    return answer


#finished