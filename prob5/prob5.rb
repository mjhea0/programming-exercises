def rand_print(num)
	if num > 40
		(40..num).each do |x|
			if x % 2 != 0
				puts x
			end
		end
	else
		(0..40).each do |x|
			if x % 2 != 0
				puts x
			end
		end
	end
end

rand_num = rand(1..100)
puts "The number is " + rand_num.to_s + "\n\n"
rand_print(rand_num)