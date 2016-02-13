def ex_oh(string)
  ex = []
  oh = []
  string.each { |char| char == 'x' ? ex << char : oh << char }
  ex.length == oh.length ? true : false
end


puts ex_oh(('xooxxo').split("")) == true
puts ex_oh(('x').split("")) == false
puts ex_oh(('xoxo').split("")) == true