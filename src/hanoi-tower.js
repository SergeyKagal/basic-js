const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {
  var x=Math.pow(2,disksNumber)-1;
  var y=Math.floor(x/(turnsSpeed/3600)) ;
  
  return {turns:x,seconds:y};

};
