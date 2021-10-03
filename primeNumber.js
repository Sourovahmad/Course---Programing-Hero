let number = 77


function isPrime(n){
    for (var i = 2; i < n; i++) {

        if (n % i == 0) {
          return "this is  Not a prime numner";
        }

         return "this is a prime numnber";

    }

}


console.log(isPrime(77));




