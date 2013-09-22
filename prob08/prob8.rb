class Discount

  def initialize(total,percent)
    @total     = total
    @percent   = percent
  end


	def calc_discount()
		if @percent > 100 or @percent < 0
			return "Sorry. Enter a valid percent."
		else
			the_discount = @total * (@percent * 0.01)
			return the_discount.round(2)
		end
	end

end


# discount1 = Discount.new(100,10)
# puts discount1.calc_discount()

# discount2 = Discount.new(90,90)
# puts discount2.calc_discount()

# discount3 = Discount.new(87.9,91.6)
# puts discount3.calc_discount()

# discount4 = Discount.new(90,-1)
# puts discount4.calc_discount()