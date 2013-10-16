from random import randrange

def factorial(num):
	total = 1
	for x in range(1,num+1):
		total *= x
	return total

rand_num = randrange(10)
print"The factorial of {0} is {1}".format(rand_num, factorial(rand_num))