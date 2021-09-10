const CustomError = require("../extensions/custom-error");

const chainMaker = {

  items : [],

  getLength() {
    return this.items.length;
    //return this;
    },

  addLink(value) {     
     this.items.push(`( ${value} )`);
     return this;
  },

  removeLink(position) {
    if(typeof(position)=='number' && position>0 && position<(this.items.length+1) && position%1==0)
        {this.items.splice((position-1),1);
          return this;
        }
        else
         {  this.items=[];
          
             throw new Error;
            }
  },

  reverseChain() {
    if(this.items.length>0)
    this.items.reverse();
    return this;
  },

  finishChain() {
    var resulChain = this.items.join('~~');
    this.items=[];
   //console.log(resulChain);  
    return resulChain;  
  }
};

module.exports = chainMaker;
