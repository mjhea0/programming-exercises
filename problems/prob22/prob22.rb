def factorial(num)
	total = 1
	(1..num).each do |x|
		total *= x
	end
	return total
end

rand_num = rand(0..100)
puts "The factorial of #{rand_num} is #{factorial(rand_num)}"