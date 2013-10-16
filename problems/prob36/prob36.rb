def count_zeros(array)
	count = 0
	array.each { |int| int == 0 ? count +=1 : nil }
	return count
end

puts count_zeros([0,1,0,2,3]) == 2
puts count_zeros([0,1,0,0,0]) == 4
puts count_zeros([0]) == 1

### -- refactured with a helper function -- ###

def count_zeros_with_helpers(array)
	count = 0
	array.each { |int| has_zeros(int) == true ? count +=1 : nil}
	return count
end

def has_zeros(num)
	num == 0 ? true : false
end

puts count_zeros_with_helpers([0,1,0,2,3]) == 2
puts count_zeros_with_helpers([0,1,0,0,0]) == 4
puts count_zeros_with_helpers([0]) == 1
