def rand_print(num)
	array = []
	(0..num).each do |x|
		if x % 2 == 0
			array << x
		end
	end
	return array
end

rand_num = rand(1..100)
puts "The number is " + rand_num.to_s + "\n\n"
print rand_print(rand_num)