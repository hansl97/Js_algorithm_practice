function palindrome(str) {
    var reg = /[\W_]/g;
    var smallStr = str.toLowerCase().replace(reg, "");
    console.log(smallStr);

    var reversed = smallStr.split("").reverse().join("");
    if (reversed === smallStr) return true;
    return false;
}
palindrome("eye");
