import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(array) {
 // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  var catNum = 0;
 
for (var i=0; i< array.length; i++)
  for(var j=0; j<array[i].length;j++)
    if(array[i][j]=="^^") catNum++;

    return catNum;
}
