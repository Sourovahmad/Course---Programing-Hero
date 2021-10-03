
  function fibonacci(n) {
    if(n == 0){
        return [0];
    } else if (n == 1){
      return [0,1];
    }
    else{

      //protom element dorkar
      // protom ta tika ager tar fibonacci bahir koron
      // array er modde push koron


      var fibo = fibonacci(n-1);
      var nextEleemts = fibo[n - 1] + fibo[n-2];
      fibo.push(nextEleemts);
      return fibo;
    }

  }
console.log(fibonacci(10));