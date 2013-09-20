
def calculate(total, discount_amount):
	if discount_amount > 100:
		raise ValueError('Percentage discount cannot be greater than 100%')
	else:
		percentage_discount = float(discount_amount)/100
		discount = float(total)* percentage_discount

print calculate(100, 90)
