// Write functions for working with shapes in standard Planar coordinate system.
// Points are represented by coordinates.
// Lines are represented by two points, marking their beginning and ending You will be given three 
// line segments. Calculate their length. Check if the line segments can form a triangle.

// The input will consist of an array containing twelve values
// Line 1, Point 1 X
// Line 1, Point 1 Y
// Line 1, Point 2 X
// Line 1, Point 2 Y
// Line 2, Point 1 X
// and so on...

// The output should be consisted of four lines
// Three lines showing the length of each line segment
// Use 2 digits of precision
// Fourth line should be one of:
// Triangle can be formed
// Triangle can't be formed

function solve(args) {

    var coords = [
        {x1: +args[0], y1:+args[1], x2: +args[2], y2: +args[3]},
        {x1: +args[4], y1:+args[5], x2: +args[6], y2: +args[7]},
        {x1: +args[8], y1:+args[9], x2: +args[10], y2: +args[11]}],
        lines = [];

    for (var i = 0; i < 3; i++) {
        getLength(coords[i].x1, coords[i].y1, coords[i].x2, coords[i].y2);
    }
    
    formTriangle(lines[0], lines[1], lines[2]);

    function getLength(x1, y1, x2, y2) {
        var distance = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 -y2));
        lines.push(distance);
        console.log(distance.toFixed(2));
    }

    function formTriangle(line1, line2, line3) {
        if ((line1 + line2 > line3) && (line1 + line3 > line2) && (line2 + line3 > line1)) {
            console.log('Triangle can be built');
        } else {
            console.log('Triangle can not be built');
        }
    }
}

//solve([ '5', '6', '7', '8', '1', '2', '3', '4', '9', '10', '11', '12' ]);
// 2.83
// 2.83
// 2.83
// Triangle can be built

solve([ '7', '7', '2', '2', '5', '6', '2', '2', '95', '-14.5', '0', '-0.123' ]);
// 7.07
// 5.00
// 96.08
// Triangle can not be built