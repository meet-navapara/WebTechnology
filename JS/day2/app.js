// ^ variable in js
//? 1 : var
//? 2: const
//? 3: let


//* 1: var
//^ all things are possible 
//! declaration
var a;
//! initialization
a=10;
console.log("a "+ a);
//! re-initialization
a=100;
console.log("a "+a);
//! re-declaration & re-initialization
var a;
a=200;
console.log("a "+a);


//* 2: let
//^ re-declaration , re-declaration & re-initialization not possible

//! declaration
let b=10;
//! initialization
// b=10;
console.log("b "+b);
//! re-initialization
b=100;
console.log("b "+b);
//! re-declaration
//let b;//not possible
//! re-declaration & re-initialization
// let b = 10;//not possible
console.log("b "+b);


//* 3: const
//^ declaration,initialization,re-declaration,re-initialization,re-declaration & re-initialization is not possible  
//! declaration 
// const a;// not possible
//! initialization
// b=10;//not possible
//! re-declaration
//const b;//not possible
//! re-declaration & re-initialization
// const b = 10;//not possible

const c =10;//~ only this thing is possible