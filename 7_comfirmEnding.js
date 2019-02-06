function confirmEnding(str, target) {
//     if (str.endsWith(target)) {
//         return true;
//     }
//     return false;
//     return str.endsWith(target);         // first method

//     if(str.substr(-target.length) === target) {
//         return true;
//     }
//     return false;                           // second method
// }                                           
    return str.slice(-target.length) === target;
}

confirmEnding("Bastian", "n");