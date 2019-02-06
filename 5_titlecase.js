// function titleCase(str) {
//     var words = str.toLowerCase().split(" ");
//     for (var i=0; i<words.length; i++) {
//         words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//     }
//     return words.join(" ");
//     console.log(words);
// }

// titleCase("I'm a little tea pot");               // first method


function titleCase(str) {
    var titled = str.toLowerCase().split(" ").map(function(elem) {return elem[0].toUpperCase() + elem.slice(1);})
    return titled.join(" "); 
}
console.log(titleCase("I'm a little tea pot"));     // second method