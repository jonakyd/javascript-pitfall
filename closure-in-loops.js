 var message = 'Hello!';

setTimeout(function() {
  console.log(message);
}, 0);

message = 'Goodbye!';


// http://stackoverflow.com/questions/3572480/please-explain-the-use-of-javascript-closures-in-loops/3572616#3572616
/*
  function generateMyHandler (x) {
    return function(){
      alert(x);
    }
  }

  for (var i=0;i<10;i++) {
    document.getElementById(i).onclick = generateMyHandler(i);
  }

  i will be keep 9

*/