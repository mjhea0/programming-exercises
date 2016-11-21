from random import randrange


def lcm(num1, num2):
    return num1 * num2 // gcd(num1, num2)


def gcd(num1, num2):
    while num2:
        num1, num2 = num2, num1 % num2
    return num1

rand1 = randrange(1, 100)
rand2 = randrange(1, 100)
print("The numbers are " + str(rand1) + " and " + str(rand2))
print(lcm(rand1, rand2))
