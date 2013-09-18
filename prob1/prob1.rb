def std_dev(x,y,avg)
  num1 = (x-avg)**2
  num2 = (y-avg)**2
  puts "The variance is: " + (num1 + num2).to_s
  std = Math.sqrt(num1+num2)
  puts "The standard dev is " + ((std).round).to_s
end
 
 
num1 = rand(1..100)
num2 = rand(1..100)
puts "The numbers are #{num1} and #{num2}"
 
avg = (num1 + num2) / 2
puts "The average is " + avg.to_s
 
std_dev(num1,num2,avg)




