from random import randrange

def rand_print(num):
	array = []
	if num > 40:
		for x in range(40,num+1):
			if x % 2 != 0:
				array.append(x)
	else:
		for x in range(0,40+1):
			if x % 2 != 0:
				array.append(x)
	return array

rand_num = randrange(100)
print "The number is " + str(rand_num)
print rand_print(rand_num)