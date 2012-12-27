var foo = 1;
function bar() {
  console.log(foo);
  /**
   * javascript dont use block-level scope, so if statement don't create block
   * it has function-level scope
   */ 
  if (!foo) {
    var foo = 10;
  }
  console.log(foo);
}
bar();