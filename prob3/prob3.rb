def rand_n(n)
  list = []
  n.times do 
    list << rand(1..100)
  end
  list
end

def max(lst)
  lst.max
end

def min(lst)
  lst.min
end

test = rand_n(20)
puts "The numbers are:"
test.each do |num|
  print num.to_s + ", "
end

max_value = max(test)
puts "\nThe max number is: " + max_value.to_s

max_value = min(test)
puts "The min number is: " + max_value.to_s


