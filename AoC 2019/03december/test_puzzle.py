from puzzle import find_smallest_manhattan_distance, find_lowest_sum_of_steps, intersections
from input import cable_one, cable_two

def test_find_smallest_manhattan_distance():
    assert find_smallest_manhattan_distance(cable_one, cable_two) == 1211

def test_find_lowest_sum_of_steps():
    assert find_lowest_sum_of_steps(cable_one, cable_two, intersections) == 101386
