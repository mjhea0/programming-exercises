def reverse_string(string):
	new = string[::-1]
	return new

print reverse_string("hello world") == "dlrow olleh"



# --- Palindrome String Test --- #

def palindrome(s):
	if s == reverse_string(s):
		return True
	else:
		return False



print palindrome("hello world") == False
print palindrome("dod") == True
print palindrome("18899881") == True


# --- Next? An array --- #