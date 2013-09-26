def remove_punctuation(str)
	str.gsub(/\p{^Alnum}/, " ")
end

def longest_word(str)
	str.split(" ").max_by(&:length)
end

string = "I& am.dfdffvffffdddddd a, stfffffff****dfdfdfdfdfgdring"
puts longest_word(remove_punctuation(string)) == "dfdffvffffdddddd"

string = "^^^^^^^^^^^^u uu"
puts longest_word(remove_punctuation(string)) == "uu"