from random import randrange


def rand_print(num):
    array = []
    for x in range(0, num + 1):
        if x % 2 == 0:
            array.append(x)
    return array


rand_num = randrange(100)
print("The number is " + str(rand_num))
print("")
print(rand_print(rand_num))
