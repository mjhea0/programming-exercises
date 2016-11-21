from random import randrange


def convert_to_array(num):
    lst = [int(i) for i in str(num)]
    total(lst)


def total(array):
    while len(array) > 0:
        print(sum(array))
        del array[0]

rand_num = randrange(1000, 9999)
print("The number is " + str(rand_num))
convert_to_array(rand_num)
