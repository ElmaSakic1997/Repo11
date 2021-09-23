// Only change code below this line
function largestNumFromArr(arr) {
    var maxNumArray = [];
    var maxTemp;

    for(i = 0; i < arr.length; i++) {
        maxTemp = arr[i][0];

        for (j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > maxTemp) {
                maxTemp = arr[i][j];
            }
        }
        maxNumArray.push(maxTemp);
    }
    return maxNumArray;
}
// Only change code above this line
console.log(largestNumFromArr([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])); // Change this line
console.log(largestNumFromArr([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));
console.log(largestNumFromArr([[17, 23, 25, 12], [25, 7, 34, 48], [4, 10, 18, 21], [72, 3, 17, 10]]));
module.exports = largestNumFromArr;