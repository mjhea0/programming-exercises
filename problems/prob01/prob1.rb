def variance(n1,n2,avg)
  num1 = (n1-avg)**2
  num2 = (n2-avg)**2
  return num1 + num2
end

def std_dev(variance)
  std = Math.sqrt(variance)
  return std
end

num1 = rand(1..100)
num2 = rand(1..100)
puts "The numbers are #{num1} and #{num2}"

avg = (num1 + num2) / 2
puts "The average is " + avg.to_s

var = variance(num1,num2,avg)
puts "The variance is: " + var.to_s

puts "The standard dev is " + (std_dev(var).round(2)).to_s