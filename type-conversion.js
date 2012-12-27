//http://stackoverflow.com/questions/2749952/what-are-the-top-javascript-pitfalls
Boolean type conversion.

''        ==   '0'           //false
0         ==   ''            //true
0         ==   '0'           //true
false     ==   'false'       //false
false     ==   '0'           //true
false     ==   undefined     //false
false     ==   null          //false
null      ==   undefined     //true
" \t\r\n" ==   0             //true
As well as the difference between null and undefined. As listed in the table above, comparing null & undefined with == returns true, but with === it returns false. This behavior makes sense once you understand that undefined is very different from a variable having a null value, and something holding the value undefined is different from something being undefined.