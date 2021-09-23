// Only change code below this line
function multiplyArrayFunction(myArray) {
    var i, j;
    var product = 0;
    var sum = 0;

    for (i=0;i<myArray.length;i++) {
        for (j=0;j<myArray[i].length;j++) {
            sum += myArray[i][j];

            if(i == 0 && j == 0) {
                product = myArray[i][j];
            } else {
                product *= myArray[i][j];
            }
        }
    }

    return [product, sum];
}
// Only change code above this line
console.log(multiplyArrayFunction([[2], [5, 6, 7], [8, 9]]));
console.log(multiplyArrayFunction([[2.5, 2], [0.5, 0.2], [8]])); 
console.log(multiplyArrayFunction([[1,2], [3,4,5,6], [7,8,9]])); // Change this line
module.exports = multiplyArrayFunction;