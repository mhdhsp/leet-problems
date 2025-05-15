var isPrefixOfWord = function(sentence, searchWord) {
    var ar=sentence.split(" ");
    var index=-1;
   
        for(i=0;i<ar.length;i++)
        {
            if(ar[i].startsWith(searchWord))
                return i+1;
        }
         return  index;

    
};

ind=isPrefixOfWord("i love eating urger","burg");
console.log(ind);
