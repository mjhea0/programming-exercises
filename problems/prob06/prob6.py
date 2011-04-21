from random import randrange


def generate_list(num):
    greater_than = []
    less_than = []
    if num > 40:
        for x in range(40, num + 1):
            if x % 2 != 0:
                greater_than.append(x)
        return greater_than
    else:
        for x in range(0, num + 1):
            if x % 2 != 0:
                less_than.append(x)
        return less_than


def reverse(lst):
    reverse_list = []
    for i in reversed(lst):
        reverse_list.append(i)
    return reverse_list


rand_num = randrange(100)
print("The number is {0}".format(rand_num))
print(reverse(generate_list(rand_num)))
