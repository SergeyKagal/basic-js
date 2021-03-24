var arr = [1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5];



var resultArr=[...arr];
var ctrl=['--double-next','--discard-next', '--double-prev','--discard-prev'];

for(var i=0;i<resultArr.length;i++){

    if(resultArr[i]==ctrl[0] && i<(resultArr.length-1)) resultArr.splice(i,1,resultArr[i+1]);
    if(resultArr[i]==ctrl[1] && i<(resultArr.length-1)) resultArr.splice(i+1,1);
    if(resultArr[i]==ctrl[2] && i>0) resultArr.splice(i,1,resultArr[i-1]);
    if(resultArr[i]==ctrl[3] && i>0) resultArr.splice(i-1,1);
}
for(var i=0;i<ctrl.length;i++) resultArr=resultArr.filter(elem => elem!=ctrl[i]);
console.log(arr);
console.log(resultArr);