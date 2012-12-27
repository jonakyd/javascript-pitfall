function a() {
 console.log("outside a");
}
function b() {
  console.log("outside a");
}

function miao() {
  a();
  b();

  /*                                                                                                                            
   * in fact, it equally to
   * var a;
   * a = function () {...}
   * javascript will hoisting the var to the scope, but assign object untill the script run to that line.
   */
  
  function a() {
    console.log("inside a");
  }
  var b = function x() {
    console.log("inside b");
  }
}

miao();

// inside b
// undefine is not a function