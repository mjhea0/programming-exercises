# brute force

from random import randrange


def calculate(num1, num2):
    if num1 % 7 == 0 and num2 % 7 == 0:
        return smaller_num(num1, num2)
    elif num1 % 5 == 0 and num2 % 5 == 0:
        return smaller_num(num1, num2)
    elif num1 % 3 == 0 and num2 % 3 == 0:
        return smaller_num(num1, num2)
    elif num1 % 2 == 0 and num2 % 2 == 0:
        return smaller_num(num1, num2)
    else:
        return False


def smaller_num(x, y):
    if x > y:
        return y
    elif x == y:
        return False
    else:
        return x

rand_num1 = randrange(1, 100)
rand_num2 = randrange(1, 100)
print("The numbers are " + str(rand_num1) + " and " + str(rand_num2))
print(calculate(rand_num1, rand_num2))
