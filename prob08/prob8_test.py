import unittest
from prob8 import Discount

class DiscountTest(unittest.TestCase):

	def test_pass(self):
		discount1 = Discount()
		self.assertEqual(discount1.calc_discount(100,10), 10.0)

	def test_fail(self):
		discount1 = Discount()
		self.assertEqual(discount1.calc_discount(100,-1), 'Sorry. Enter a valid percent.')

if __name__ == '__main__':
    unittest.main()