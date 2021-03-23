const  myObject =
{
    items : [],
    sayHi() {console.log('Hello')},
    sayBue() {console.log('Good Bue!')},
    
    addItem(value) {this.items.push(value)}



}


myObject.sayHi();
myObject.sayBue();

addItem(455);
console.log(myObject.items);
