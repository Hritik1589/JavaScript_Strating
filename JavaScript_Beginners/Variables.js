/*
var is used before year 2015.Var gives problems in the scopes.So better practice to use let.
let is use after 2015.
const is used after 2015.


Below i take some examples to deeply understand the concept.
*/

var a = 10;
let b = 20;
const c = 30;
/* 
/workspaces/JavaScript_Strating/JavaScript_Beginners/Variables.js:16
c = 60; 
  ^

TypeError: Assignment to constant variable.

So, when i try to change the constant value c it gives an error becuase we cannot change the value once it declared in the const.
*/
a = 40;
b = 50;
//c = 60; 
console.table([a,b,c]);