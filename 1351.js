// Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.



// var countNegatives = function(grid) {
//     let count=0;
//     for(let i=0;i<grid.length;i++)
//        {
//          for(j=0;j<grid[i].length;j++)
//             if(grid[i][j]<0)
//                 count++
//        }

//            return count
// };
var countNegatives = function(grid) {
    let rows=grid.length;
    let cols=grid[0].length;

    let count=0;
    let row=rows-1;
    let col=0;
    while(row>=0&& col<cols)
    {
        if(grid[row][col]<0)
           {
             count+=(cols-col);
             row--;
           }
        else
            col++
    }
    return count
};


grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
console.log(countNegatives(grid));

 grid = [[3,2],[1,0]]
 console.log(countNegatives(grid));