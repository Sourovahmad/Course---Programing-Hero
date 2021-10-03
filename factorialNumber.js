 // factorial number structure, factorial sign !

 // 1! = 1*
 // 2! = 1*2
 // 3! = 1*2*3


//  var makeFactory = 10;
//  var result = 1;

//  for(var i = 1; i <= makeFactory; i++){
//      result = result * i;
//  }

//  console.log(result);



 function factorial(n){
     if (n == 1){
         return 1;
     }else{
         return n * factorial(n - 1);
     }
 }
 var result = factorial(50);
 console.log(result);