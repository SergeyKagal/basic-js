import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason( date ) {
 if(d==null)return 'Unable to determine the time of year!';
  if(Object.prototype.toString.call(d)!='[object Date]') throw new Error ;
 
var monthNum=d.getMonth();
if(monthNum>=0 && monthNum<2 || monthNum ==11) return 'winter';
else if (monthNum>1 && monthNum<5) return 'spring';
else if (monthNum>4 && monthNum<8) return 'summer';
else if (monthNum>7 && monthNum<11) return 'autumn';
}
