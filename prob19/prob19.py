def key_with_max_val(dict): 
	values=list(dict.values())
	keys=list(dict.keys())
	return keys[values.index(max(values))]

people = {"mike":30, "jack":22, "frank":16, "karl":19, "matt": 37}
print "The oldest person is " + str(key_with_max_val(people))