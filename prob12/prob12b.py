from random import randrange

def gcd(num1, num2):
    while num2:
        num1, num2 = num2, num1 % num2
    return num1

def smaller_num(x, y):
	if x > y:
		print y
	elif x == y:
		print False
	else:
		print x


rand_num1 = randrange(1,100)
rand_num2 = randrange(1,100)
print "The numbers are " + str(rand_num1) + " and " + str(rand_num2)

if gcd(rand_num1,rand_num2) > 1:
	smaller_num(rand_num1, rand_num2)
else:
	print False



