def spiral(arr):
	test = []
	for x in arr:
		for y in x:
			test.append(y)
	return sorted(test)

array = [[1,2,3],[8,9,4],[7,6,5]]
print spiral(array) == [1,2,3,4,5,6,7,8,9]