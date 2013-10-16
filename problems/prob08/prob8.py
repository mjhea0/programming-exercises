class Discount:
	@staticmethod
	def calc_discount(total, percent):
		if percent > 100 or percent < 0:
			return "Sorry. Enter a valid percent."
		else:
			the_discount = total * (percent * .01)
			return round(the_discount,2)



# discount1 = Discount()
# print discount1.calc_discount(100,10)
# print discount1.calc_discount(90,90)
# print discount1.calc_discount(87.9,91.6)
# print discount1.calc_discount(90,-1)