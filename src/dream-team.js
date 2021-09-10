import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam( a ) {
   if(!(Array.isArray(a))) return false;

  var dreamT=[];
  a.forEach(element => {

      if(typeof(element)=='string')
      {element=element.trim();
      dreamT.push(element[0].toUpperCase());  }
         
    
    });
dreamT.sort();    
  return dreamT.join(''); 
 // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
