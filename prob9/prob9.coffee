rand_nums = []

generate_random = (num) ->
  i = 0

  while i <= num
    rand_nums.push Math.floor((Math.random() * 100))
    i++
  document.write rand_nums.sort() + "<br/>"

generate_random(10)
rand_nums = []
generate_random(20)
rand_nums = []
generate_random(5)