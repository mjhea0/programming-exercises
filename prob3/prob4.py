from random import randrange

def rand_print(num):
	for x in range(0,num+1):
		if x % 2 == 0:
			print x

rand_num = randrange(100)
print "The number is " + str(rand_num)
print ""
rand_print(rand_num)