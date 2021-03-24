

const  myObject =
{
    items : [],

       addItem(value) 
    {
       
         this.items.push(`( ${value} )`);
    
    },

    getLength() {
        return this.items.length;
        },


    removeLink(position) {       
        if(typeof(position)=='number' && position>0 && position<(this.items.length+1) && position%1==0)
        this.items.splice((position-1),1);
        else
         {  this.items=[];
             throw new Error;
            }

        },

    reverseChain() 
    {
    this.items.reverse();
    },

    finishChain() {
        let resulChain = this.items.join('~~');
        this.items=[];
       console.log(resulChain);  
        return resulChain;  
      }

}




myObject.addItem(1);
myObject.addItem(2);
myObject.addItem(3);myObject.addItem(4);myObject.addItem(5);myObject.addItem(6);
myObject.addItem(function () {});


console.log(myObject.items);
myObject.removeLink(1);
myObject.reverseChain();

console.log(myObject.getLength());
myObject.finishChain();




console.log(myObject.items);
console.log((` ${function () {}} `));
console.log(typeof(function () {}));

