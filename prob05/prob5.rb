def rand_print(num)
	array = []
	if num > 40
		(40..num).each do |x|
			if x % 2 != 0
				array << x
			end
		end
	else
		(0..40).each do |x|
			if x % 2 != 0
				array << x
			end
		end
	end
	return array
end

rand_num = rand(1..100)
puts "The number is " + rand_num.to_s + "\n"
print rand_print(rand_num)