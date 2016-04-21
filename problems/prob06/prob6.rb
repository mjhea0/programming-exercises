def rand_print(num)
  greater_than = []
  less_than = []
  if num > 40
    (40..num).each do |x|
      if x % 2 != 0
        greater_than << x
      end
    end
    return greater_than.reverse
  else
    (0..num).each do |x|
      if x % 2 != 0
        less_than << x
      end
    end
    return less_than.reverse
  end
end

rand_num = rand(1..100)
puts "The number is " + rand_num.to_s + "\n\n"
print rand_print(rand_num)