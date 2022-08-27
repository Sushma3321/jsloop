
let c=require("readline-sync");
let loop=c.question("enter loop time");
var max=0;
let list=[];
for (let i=1;i<=loop;i++){
   let num=c.question("enter the number:");
   (list. push(num));
   var a=list.length
   var max=list[0]
   for (j=0;j<=list.length;j++){
      if (max<list[j]){
         max=list[j]
      }
   }
}
console.log(max);
