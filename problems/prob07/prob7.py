def discount(total, percent):
    if percent > 100 or percent < 0:
        return "Sorry. Enter a valid percent."
    else:
        the_discount = total * (percent * .01)
        return round(the_discount, 2)

print(discount(100, 10) == 10.00)
print(discount(90, 90) == 81.00)
print(discount(87.9, 91.6) == 80.52)
print(discount(90, -1) == "Sorry. Enter a valid percent.")
