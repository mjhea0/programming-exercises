from random import randrange


def rand_n(num):
    lst = []
    for i in range(num):
        lst.append(randrange(100))
    return lst


def max_n(lst):
    return max(lst)


def min_n(lst):
    return min(lst)


lst = rand_n(20)
print("The numbers are " + str(lst)[1:-1])

max_num = max_n(lst)
print("The max number is " + str(max_num))

min_num = min_n(lst)
print("The min number is " + str(min_num))
