class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const counts = {};

    for (const char of s) {
        if (counts[char] === undefined) {
            counts[char] = 1;
        } else {
            counts[char]++;
        }
    }

    
    for (const char of t) {
        if (counts[char] === undefined) {
            return false;
        }

        counts[char]--;

        if (counts[char] < 0) {
            return false;
        }
    }

    return true;
}
}
