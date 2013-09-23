def convert_to_array(num)
	lst = num.to_s.split('').map(&:to_i)
	total(lst)
end

def total(array)
	sum = 0
	while array.length > 0
		p array.inject(:+)
		array.shift
	end
end

rand_num = rand(1000..9999)
puts "The number is " + rand_num.to_s + "\n"
convert_to_array(rand_num)


