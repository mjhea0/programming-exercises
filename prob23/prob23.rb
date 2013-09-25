def longest_word(str)
	str.split(" ").max_by(&:length)
end

string = "I amdfdffvffffdddddd a stfffffffdfdfdfdfdfgdring"
puts longest_word(string) == "stfffffffdfdfdfdfdfgdring"