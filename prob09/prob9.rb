def generate_random(num)
	rand_nums = []
	(0..num).each do |x|
		rand_nums << rand(1..100)
	end
	return rand_nums.sort
end


print generate_random(10)
puts
print generate_random(20)
puts
print generate_random(5)
