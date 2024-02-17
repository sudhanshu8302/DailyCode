/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var str = x.toString();
    const len = str.length;
    const mid = len/2+1;

    for(let i=0;i<mid; i++){
        if(str[i] !== str[len - 1 - i])
            return false;
    }
    return true;
};