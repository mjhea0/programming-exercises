def gcd(n1,n2)
  n1,n2 = n2,n1 if n1 < n2
  n1,n2 = n2,n1%n2 while n1%n2 != 0
  return n2
end

def smaller_num(x, y)
	if x > y
		puts y
	elsif x == y
		puts false
	else
		puts x
	end
end


rand_num1 = rand(1..100)
rand_num2 = rand(1..100)
puts "The numbers are " + (rand_num1.to_s) + " and " + (rand_num2.to_s)

if gcd(rand_num1,rand_num2) > 1
	smaller_num(rand_num1, rand_num2)
else
	puts false
end



