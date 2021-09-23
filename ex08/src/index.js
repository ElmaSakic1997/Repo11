// Only change code below this line
function myMutation(arr) {
    var newString, string1, string2;
    newString = "";
    string1 = arr[0].toLowerCase();
    string2 = arr[1].toLowerCase();

    for (i = 0; i < string2.length; i++) {
        if (string1.indexOf(string2[i]) < 0) {
            return false;
        }
        return true;
    }
}
// Only change code above this line

console.log(myMutation("hello", "hey")); // Change this line

module.exports = myMutation;