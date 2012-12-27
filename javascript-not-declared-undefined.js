// how do you know a var in javascript is declare or not
function miao() {
  var foo;
  console.log(foo);
  // bar is not event declared
  console.log(bar);
}
miao(); 

// output
// undefined
// ReferenceError: bar is not defined