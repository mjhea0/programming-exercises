import time


# recursion
def power_recursion(base, exponent):
	if exponent == 0:
		return 1
	else:
		return base * power_recursion(base, exponent-1)

	# power_recursion(2,4)
	# 2 * power_recursion(2,3)
	# 2 * 2 * power_recursion(2,2)
	# 2 * 2 * 2 * power_recursion(2,1)
	# 2 * 2 * 2 * 2 * power_recursion(2,0) <= base

# loop
def power_loop(base, exponent):
	i = 0
	total = 1
	if exponent == 0:
		return 1
	else:
		while (i < exponent):
			total *= base
			i += 1
		return total 

# timer
class Timer:    
    def __enter__(self):
        self.start = time.clock()
        return self

    def __exit__(self, *args):
        self.end = time.clock()
        self.interval = self.end - self.start

t1 = Timer()
with t1:
    power_recursion(100,100)
time_taken = t1.interval
print str(time_taken) + " - recursion"

t2 = Timer()
with t2:
	power_loop(100,100)
time_taken = t2.interval
print str(time_taken) + " - loop"
