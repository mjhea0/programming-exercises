from random import randrange

rand_nums = []

# generate n random numbers
def generate_random(num):
	for x in range(0,num):
		rand_nums.append(randrange(100))
	sort_list(rand_nums)

# sort
def sort_list(lst):
	rand_nums.sort()
	print rand_nums

generate_random(10)
# clear the list
rand_nums = []
generate_random(20)
rand_nums = []
generate_random(5)

