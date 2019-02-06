// function repeatStrNumTimes(str, num) {
//     if (num < 0) return "";
//     return str.repeat(num);
// }                                        // first method

// function repeatStrNumTimes(str, num) {
//     var final = "";
//     if (num < 0) return "";
    
//     for (var i=0; i<num; i++) {
//         final += str;
//     }
//     return final;
// }                                           // second method

function repeatStrNumTimes(str, num) {
    if(num < 0) return "";
    if(num === 1) return str;

    return str + repeatStrNumTimes(str, num-1);
}

repeatStrNumTimes("abc", 3);