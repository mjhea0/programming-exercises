def discount(total, percent)
	if percent > 100 or percent < 0
		return "Sorry. Enter a valid percent."
	else
		the_discount = total * (percent * 0.01)
		return the_discount.round(2)
	end
end

puts discount(100,10) == 10.00
puts discount(90, 90) == 81.00
puts discount(87.9, 91.6) == 80.52
puts discount(90,-1) == "Sorry. Enter a valid percent."
