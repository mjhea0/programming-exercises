from random import randrange


# generate n random numbers
def generate_random(num):
    rand_nums = []
    for x in range(0, num):
        rand_nums.append(randrange(100))
    return sorted(rand_nums)

print(generate_random(10))
print(generate_random(20))
print(generate_random(5))
