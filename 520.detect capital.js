// We define the usage of capitals in a word to be right when one of the following cases holds:

// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital, like "Google".
// Given a string word, return true if the usage of capitals in it is right.
var detectCapitalUse = function(word) {
    let allcap=word.toUpperCase();
    let allsmall=word.toLowerCase();
    let first= word.slice(0,1).toUpperCase()+word.slice(1).toLowerCase();
    if(word===allcap || word===allsmall || word===first)
        return true
    return false
};
 word = "USA";
 console.log(detectCapitalUse(word));
 word = "FlaG"
 console.log(detectCapitalUse(word));