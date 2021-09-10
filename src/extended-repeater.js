import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater( str, options ) {
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
 // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
