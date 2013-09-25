def key_with_max_val(hash)
  hash.max_by{|key,value| value}
end

people = {"mike"=>30, "jack"=>22, "frank"=>16, "karl"=>19, "matt"=> 37}
print "The oldest person is " + (key_with_max_val(people)).to_s