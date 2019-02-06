function reverseString(str) {
    // var strArr = str.split("");
    // var reverseStrArray = strArr.reverse();
    // var reversedString = reverseStrArray.join("");
    // return reversedString;                               // first method

    // return str.split("").reverse().join("");             // second method

    var final = '';
    for (var i = str.length-1; i>=0; i--) {
        final = final + str[i];
    }
    return final;                                           // third method
}

console.log(reverseString("hello")) // olleh