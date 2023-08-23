console.log("Hello");

var a = 10;
console.log(a);

let b =20;
console.log(b);



var aa = 10
let bb = 11
const cc = 13
//* block scope start
{
    console.log(aa);
    console.log(bb);
    console.log(cc);
    let ab= 10;
    console.log(typeof ab);
}
//* block scope ends 
// console.log(ab);