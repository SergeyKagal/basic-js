import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");

  var resultArr = [...arr];
  var ctrl = ['--double-next', '--discard-next', '--double-prev', '--discard-prev'];

  for (var i = 0; i < resultArr.length; i++) {

    if (resultArr[i] == ctrl[0] && i < (resultArr.length - 1)) resultArr.splice(i, 1, resultArr[i + 1]);
    if (resultArr[i] == ctrl[1] && i < (resultArr.length - 1)) resultArr.splice(i + 1, 1);
    if (resultArr[i] == ctrl[2] && i > 0) resultArr.splice(i, 1, resultArr[i - 1]);
    if (resultArr[i] == ctrl[3] && i > 0) resultArr.splice(i - 1, 1);
  }

  for (var i = 0; i < ctrl.length; i++) resultArr = resultArr.filter(elem => elem != ctrl[i]);
  //console.log(arr);
  //console.log(resultArr);
  return resultArr;
}