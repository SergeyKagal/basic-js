const CustomError = require("../extensions/custom-error");

module.exports = function countCats(array) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here

var catNum = 0;
 
for (var i=0; i< array.length; i++)
  for(var j=0; j<array[i].length;j++)
    if(array[i][j]=="^^") catNum++;

    return catNum;
};
