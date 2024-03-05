/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let p1 = 0;
    let p2 = 0;
    let maxL = 0; // Initialize maxL to 0, since an empty string has length 0.
    let currL = 0;
    let set = new Set();

    while (p2 < s.length) {
        if (set.has(s[p2])) {
            while (s[p1] !== s[p2]) { // Move p1 until it reaches the duplicate character
                set.delete(s[p1]);
                p1++;
                currL--;
            }
            set.delete(s[p1]); // Delete the duplicate character
            p1++; // Move p1 to the next character
            currL--; // Decrease current length by 1 to account for duplicate
        }
        
        set.add(s[p2]);
        currL++;
        p2++;

        if (currL > maxL) {
            maxL = currL;
        }
    }
    return maxL;
};