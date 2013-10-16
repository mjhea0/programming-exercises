def rand_n(n)
  list = []
  n.times do 
    list << rand(1..100)
  end
  list
end
 
def average(list)
  sum = list.inject{|sum,x| sum + x }
  avg = sum / list.length()
end
 
def variance(list,average)
  var_list =[]
  list.each do |num|
    var_list << ((num - average)**2)
  end
  variance = var_list.inject{|sum,x| sum + x } / list.length()
end
 
def std_dev(variance)
  standard_dev = Math.sqrt(variance)
end
 
test = rand_n(10)
puts "The numbers are:"
test.each do |num|
  print num.to_s + ", "
end

avgerage = average(test)
puts "\nThe average is " + avgerage.to_s

var = variance(test,avgerage)
puts "The variance is " + var.to_s

std = std_dev(var)
puts "The standard dev is " + (std).round.to_s