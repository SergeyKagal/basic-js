const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(director) {
    this.director = director;
  }
//---------------------------------------------------------------------------------------------
  encrypt(message,key) {

    if (typeof(message)==='undefined' || typeof(key)==='undefined') throw new Error();

    var str=message.toUpperCase();
var cifer=key.toUpperCase();
var result=[];

for (var index = 0, j=0; index < str.length; index++) {    
    if(str.charCodeAt(index)<65 || str.charCodeAt(index)>90)result[index]=str.charCodeAt(index);        
        else
        {
            result[index]=cifer.charCodeAt(j)-65+str.charCodeAt(index);
            j++;
            if(j>cifer.length-1)j=0;
        }
    if(result[index]>90) result[index]-=26;
}

for(var i=0;i<result.length;i++)
{
    result[i]=(String.fromCharCode(result[i]));
}

if(this.director===undefined) return result.join('');
else return result.split('').reverse().join('');
}
//----------------------------------------------------------------------------------------------
      
  decrypt(message,key) {

    if (typeof(message)=='undefined' || typeof(key)=='undefined') throw new Error();

    var str=message.toUpperCase();
    var cifer=key.toUpperCase();
    var result=[];
    console.log(str,cifer);
    
    for (var index = 0, j=0; index < str.length; index++) {    
        if(str.charCodeAt(index)<65 || str.charCodeAt(index)>90)result[index]=str.charCodeAt(index);        
            else
            {
                result[index]=str.charCodeAt(index)-(cifer.charCodeAt(j)-65);
                j++;
                if(j>cifer.length-1)j=0;
            }
            if(result[index]<65 && str.charCodeAt(index)>64) result[index]+=26;
       // if(result[index]<65) result[index]-=26; 
    }
    
for(var i=0;i<result.length;i++)
{
    result[i]=(String.fromCharCode(result[i]));
}
//console.log(this.director,'********************************')
if(this.director===undefined) return result.join('');
else return result.split('').reverse().join('');
  
}
}

module.exports = VigenereCipheringMachine;

