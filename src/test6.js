const  myObject =
{
    items : [],
    sayHi() {console.log('Hello')},
    sayBue() {console.log('Good Bue!')},
    
    addItem(value) 
    {
        if(!value)this.items.push('(  )');
        else this.items.push('( '+value.toString()+' )');
    return this;
    }



}


myObject.sayHi();
myObject.sayBue();

myObject.addItem();
console.log(myObject.items);
