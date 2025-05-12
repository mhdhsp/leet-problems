var reverseVowels = function(s) {
    
    vow=[],con=[];
    for(let i of s)
    {
        switch(i.toLowerCase())
        {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
                vow.push(i);
                break;
            default:
                con.push(i);
        }

    }
    res="",j=0;k=0;
    vow.reverse();
    for(i=0;i<s.length;i++)
    {
        switch(s.at(i).toLowerCase())
        {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
                res+=vow[j];
                j++;
                break;
            default:
                res+=con[k];
                k++;
        }
    }
    console.log(res);
};

reverseVowels("IceCreAm");
reverseVowels("leetcode");