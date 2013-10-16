/** incomplete */

function time_difference(s,e) {
	return (e - s) / 1000 // sec
}

// function hours(d) {
// 	return Math.floor(d * 1000 * 60 * 60);
// }

// function minutes(d) {
// 	return Math.floor(d * 1000 * 60);
// }


var start = new Date(2013, 0, 1,  9, 10); 
var end = new Date(2013, 0, 1, 17, 10); 

var dif = time_difference(start,end)

// document.write(hours(dif))
// document.write(minutes(dif))
