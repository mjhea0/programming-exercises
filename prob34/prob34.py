def vowels_string(string):
	vowels = ['a', 'e', 'i', 'o', 'u']
	count = []
	for vowel in vowels:
		for letter in string:
			if letter == vowel:
				count.append(vowel)
	return len(count)

print vowels_string("testa") == 2
print vowels_string("mustache") == 2
print vowels_string("aeiouy") == 4