const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(array, cnt=1) {
    if (!Array.isArray(array)) throw new Exception('not an array');
    
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
