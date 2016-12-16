function solve(array) {

    var x,
        y,
        area,
        perimeter;

    x = Number(array[0]);
    y = Number(array[1]);
    area = x * y;
    perimeter = 2 * (x + y);

    console.log(area.toFixed(2) + ' ' + perimeter.toFixed(2));
}