// You are given a 2D 0-indexed integer array dimensions.

// For all indices i, 0 <= i < dimensions.length, dimensions[i][0] represents the length and dimensions[i][1] represents the width of the rectangle i.

// Return the area of the rectangle having the longest diagonal. If there are multiple rectangles with the longest diagonal, return the area of the rectangle having the maximum area.

 
var areaOfMaxDiagonal = function(dimensions) {
    let maxDiagonal = 0;
    let maxArea = 0;

    for (let i = 0; i < dimensions.length; i++) {
        let length = dimensions[i][0];
        let width = dimensions[i][1];

        let diagonal = Math.sqrt(length * length + width * width);
        let area = length * width;

        if (diagonal > maxDiagonal) {
            maxDiagonal = diagonal;
            maxArea = area;
        } else if (diagonal === maxDiagonal) {
            maxArea = Math.max(maxArea, area);
        }
    }

    return maxArea;
};


dimensions = [[9,3],[8,6]];
console.log(areaOfMaxDiagonal(dimensions));


dimensions = [[3,4],[4,3]];
console.log(areaOfMaxDiagonal(dimensions));