from random import randrange
from math import sqrt
 
def rand_n(n):
    lst = []
    for i in xrange(n):
	lst.append(randrange(100))
    return lst
 
def average(lst):
    avg = sum(lst) / len(lst)
    return avg
 
def variance(lst,avg):
    var_list = []
    for num in lst:
	var_list.append((num-avg)**2)
    variance = sum(var_list) / len(var_list)
    return variance
 
def std_dev(variance):
    std = sqrt(variance)
    return std
 
lst = rand_n(10)
print "The numbers are " + str(lst)[1:-1]
 
avg = average(lst)
print "The average is " + str(avg)
 
var = variance(lst,avg)
print "The variance is " + str(var)
 
std = std_dev(var)
print "The standard dev is " + str(round(std,2))