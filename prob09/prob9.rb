def generate_random(num)
	rand_nums = []
	(0..num).each do |x|
		rand_nums << rand(1..100)
	end
	print rand_nums.sort
	puts "\n"
end


generate_random(10)
generate_random(20)
generate_random(5)
