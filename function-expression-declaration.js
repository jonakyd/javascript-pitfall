function foo() {
  var bar = function bar() {
    console.log('bar1');
  }

  function bar() {
    console.log('bar2');
  }
  bar();
}
foo();

// bar1


// http://stackoverflow.com/questions/3887408/javascript-function-declaration-and-evaluation-order
/*
Function Declaration
- function name (arguments) {code}
- name and arguments are of course optional

Function Expressions
- declarations except that they are written in expression context. And expressions are:
- * Anything to the right of an = sign.
- * Anything in braces ().
- * Parameters to functions (this is actually already covered by 2).

Expressions unlike declarations are processed in the execution phase rather than the compilation phase. And because of this the order of expressions matter.
*/