from random import randrange

greater_than = []
less_than = []

def rand_print(num):
	if num > 40:
		for x in range(40,num+1):
			if x % 2 != 0:
				greater_than.append(x)
		reverse(greater_than)
	else:
		for x in range(0,num+1):
			if x % 2 != 0:
				less_than.append(x)
		reverse(less_than)

def reverse(lst):
	for i in reversed(lst):
		print i


rand_num = randrange(100)
print "The number is " + str(rand_num)
print ""
rand_print(rand_num)