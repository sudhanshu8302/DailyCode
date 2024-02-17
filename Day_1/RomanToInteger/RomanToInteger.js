/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function(s) {
    const fn = (s) => {
        switch(s){
            case "I": return 1;
            case "V": return 5;
            case "X": return 10;
            case "L": return 50;
            case "C": return 100;
            case "D": return 500;
            case "M": return 1000;
        }
        return 0;
    }

    var res = 0;
    for(var i=0; i<s.length; i++){
        if(i===s.length-1){
            res+=fn(s[i])
        }
        else if(fn(s[i]) < fn(s[i+1])){
            res-=fn(s[i]);
        }
        else{
            res+=fn(s[i]);
        }
    }
    return res;
};