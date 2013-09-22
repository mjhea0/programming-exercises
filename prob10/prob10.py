from random import randrange

def rand_sum(num):
	total = 0
	for x in str(num):
		total += int(x)
	return total

rand_num = randrange(1000,9999)
print "The number is " + str(rand_num)
print "The sum of its digits is " + str(rand_sum(rand_num))


