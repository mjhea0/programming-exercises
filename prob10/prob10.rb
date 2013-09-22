def rand_sum(num)
	total = 0
	(num.to_s).each_char do |x|
		total += (x.to_i)
	end
	return total
end

rand_num = rand(1000..9999)
puts "The number is " + rand_num.to_s + "\n"
puts "The sum of its digits is " + (rand_sum(rand_num)).to_s
