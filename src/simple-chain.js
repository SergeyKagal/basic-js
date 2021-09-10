import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  getLength() {
    return this.items.length;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  addLink( value ) {
   this.items.push(`( ${value} )`);
     return this;    
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  removeLink( position ) {
    if(typeof(position)=='number' && position>0 && position<(this.items.length+1) && position%1==0)
        {this.items.splice((position-1),1);
          return this;
        }
        else
         {  this.items=[];
          
             throw new Error;
            }
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
    if(this.items.length>0)
    this.items.reverse();
    return this;
   // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
   var resulChain = this.items.join('~~');
    this.items=[];
   //console.log(resulChain);  
    return resulChain; 
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
};
