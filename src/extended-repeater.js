const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options) {
  let result='';
  let resString=(`${str}`);
  
  if(options.addition===null) options.addition='null';
if(!options.repeatTimes) options.repeatTimes = 1;
if(!options.separator) options.separator='+';
if(!options.additionSeparator) options.additionSeparator='|';
if(!options.additionRepeatTimes) options.additionRepeatTimes = 1;
if(options.addition==undefined) options.addition="";



    for(var i=0;i<options.repeatTimes;i++)
    {
      result+=resString;
      for(var j=0;j<options.additionRepeatTimes;j++)
      {
        result+=options.addition;
        if (j<(options.additionRepeatTimes-1)) result+=options.additionSeparator;
      }
      if(i<options.repeatTimes-1)
      result+=options.separator;
    }


    

    
      return result;
};
  