import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth(array, cnt=1) {
    
    var result = cnt;

    for(var i = 0; i < array.length; ++i) {
     if (Array.isArray(array[i])) {
      var subArray = this.calculateDepth(array[i], cnt + 1);
      if (subArray > result) {
      result = subArray;
        }
      }
    }
    return result;
    }  
};
