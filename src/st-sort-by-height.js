import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {

  const arrLength = arr.length;
  const arr1 = [];
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) arr1.push(i)
  }

  arr = arr.filter(x => x != -1).sort((a, b) => a - b);

  console.log(arr, arr1)

  for (var i = 0; i < arrLength; i++) {
    if (arr1.includes(i)) result.push(-1);
    else {
      result.push(arr[0]);
      arr.shift();
    }


  }
  return result;

}