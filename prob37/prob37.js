function processParagraph(paragraph) {
    var array = paragraph.split(" ")
    for (var i = 0; i < array.length; i++) {
        if (array[i].charAt(0) === "%" && array[i].charAt(1)) {
            return console.log("This is an H1:" + paragraph.slice(("%", 2)))
        } else if (array[i].charAt(0) === "%") {
            return console.log("This is an HX:" + paragraph.slice(("%", 1)))
        } else {
            return console.log("This is a p: " + paragraph)
        }
    }
}

var p1 = "% The Book of Programming"
var p2 = "%% The Two Aspects"
var p3 = "Below the surface of the machine, the program moves. Without effort," +
    "it expands and contracts. In great harmony, electrons scatter and" +
    "regroup. The forms on the monitor are but ripples on the water. The" +
    "essence stays invisibly below."

processParagraph(p1)
processParagraph(p2)
processParagraph(p3)


// http://jsfiddle.net/mjhea0/mpbrx/