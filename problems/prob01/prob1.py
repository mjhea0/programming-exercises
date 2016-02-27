from random import randrange
from math import sqrt


def variance(n1, n2, avg):
    num1 = (n1 - avg)**2
    num2 = (n2 - avg)**2
    return num1 + num2


def std_dev(variance):
    std = sqrt(variance)
    return std

num1 = randrange(100)
num2 = randrange(100)
print("The numbers are {0} and {1}".format(num1, num2))


avg = (num1 + num2) / 2
print("The average is " + str(avg))

var = variance(num1, num2, avg)
print("The variance is: " + str(var))

print("The standard dev is " + str(round((std_dev(var)), 2)))
