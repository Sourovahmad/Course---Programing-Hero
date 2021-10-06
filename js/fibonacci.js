

// ফিবোনাক্কি হবে তার আগের দুইটা সঙ্খার যোগফল
//   fibonacci law = fibonacci = fibonacci[n-1] + fibonacci[n-2];


// for (var i = 2; i <= 10; i++) {

//     fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];

// }






// problem = make the fibonacci from 15 - 25;

var fiboSeries = [0,1];


// for(var i = 2; i <= 10; i++){


//     if (fiboSeries[i - 1] + fiboSeries[i - 2] <= 25){
//         fiboSeries[i] = fiboSeries[i - 1] + fiboSeries[i - 2];
//     }

// }

let i=2

while(i <= 10){

    fiboSeries[i] = fiboSeries[i - 1] + fiboSeries[i - 2];
    i++;
}

console.log(fiboSeries); 