require './prob8.rb'

#---- to run ---- #
# $ rspec prob8_test.rb -c -fd


describe Discount do

  before do
    @discount1 = Discount.new(100,10)
    @discount1.calc_discount()
    @discount2 = Discount.new(90,-1)
    @discount2.calc_discount()
  end

  describe '#pass' do
    it 'should return the discount amount' do
      @discount1.calc_discount()
      @discount1.calc_discount.should eql 10.0
    end
  end

  describe '#fail' do
    it 'should return an error message' do
      @discount2.calc_discount()
      @discount2.calc_discount.should eql "Sorry. Enter a valid percent."
    end
  end

end

