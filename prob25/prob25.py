import datetime as dt

def time_differnce(s,e):
	start_dt = dt.datetime.strptime(s, '%H:%M')
	end_dt = dt.datetime.strptime(e, '%H:%M')
	return end_dt - start_dt

start="09:35"
end="10:35"
print time_differnce(start,end)

start="15:45"
end="16:57"
print time_differnce(start,end)

start="23:00"
end="23:17"
print time_differnce(start,end)