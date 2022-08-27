let n=require("readline-sync");

let choose_ascii=(n.question("enter number: "));

var ascii_char=95+Number(choose_ascii)

for (i=95;i<=ascii_char;i++){
    console.log(String.fromCharCode(i))
}


