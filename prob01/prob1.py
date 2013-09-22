from random import randrange
from math import sqrt
 
 
def std_dev(x,y,avg):
    num1 = (x-avg)**2
    num2 = (y-avg)**2
    print "The variance is: " + str(num1 + num2)
    std = sqrt(num1+num2)
    print "The standard dev is " + str(round(std,2))
 
num1 = randrange(100)
num2 = randrange(100)
print "The numbers are {0} and {1}".format(num1,num2)
 
avg = (num1 + num2) / 2
print "The average is " + str(avg)
 
std_dev(num1,num2,avg)