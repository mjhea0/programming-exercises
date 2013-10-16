def spiral(arr)
  test = []
  test << arr.delete_at(0)
  if arr.empty? then return test end # base
  test += spiral(arr.transpose.reverse)
end

array = [[1,2,3],[8,9,4],[7,6,5]]
p spiral(array).join(", ") ==  "1, 2, 3, 4, 5, 6, 7, 8, 9"