def spiral(arr)
  test = []
  arr.each do |inner|
    inner.each { |n| test << n }
  end
  test.sort()
end

array = [[1,2,3],[8,9,4],[7,6,5]]
p spiral(array) == [1,2,3,4,5,6,7,8,9]