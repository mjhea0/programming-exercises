def rand_print(num)
	(0..num).each do |x|
		if x % 2 == 0
			puts x
		end
	end
end

rand_num = rand(1..100)
puts "The number is " + rand_num.to_s + "\n\n"
rand_print(rand_num)