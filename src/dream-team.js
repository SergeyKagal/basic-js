const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(a) {
  
    if(!(Array.isArray(a))) return false;

  var dreamT=[];
  a.forEach(element => {

      if(typeof(element)=='string')
      {element=element.trim();
      dreamT.push(element[0].toUpperCase());  }
         
    
    });
dreamT.sort();    
  return dreamT.join('');    
     



};
