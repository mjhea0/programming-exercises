rand_n = (n) ->
  list = []
  i = 1

  while i <= n
    list.push Math.floor((Math.random() * 100))
    i++
  list

average = (list) ->
  average_value = 0
  i = 0

  while i < list.length
    average_value += Number(list[i])
    i++
  Math.round average_value / list.length

variance = (rand_list, average) ->
  variance_value = 0
  i = 0

  while i < rand_list.length
    variance_value += Number(Math.pow((list[i] - avg), 2))
    i++
  variance_value / rand_list.length

standard_deviation = (variance) ->
  std_dev = Math.sqrt(variance)
  Math.round std_dev

rand_nums = rand_n(10)
document.write "The numbers are " + rand_nums
avg = average(rand_nums)
document.write "<br/>The average is " + avg
var_variable = variance(rand_nums, avg)
document.write "<br/>The variance is " + var_variable
std_dev = standard_deviation(var_variable)
document.write "<br/>The standard dev is " + std_dev