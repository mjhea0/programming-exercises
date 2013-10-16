def self.new_password(size=12)
  chars = (('a'..'z').to_a + ('A'..'Z').to_a + ('0'..'9').to_a + ['!','@','#','$','%','^','*','&','(',')','-','+',',',';','?','/','}','{','[',']','=','<','>', ':']) - %w(i o O 0 1 l 0)
  (1..size).collect{|a| chars[rand(chars.size)] }.join
end

puts new_password(20)
