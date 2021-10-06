 var array = [1,2,3,4,5,6,7,8];

function sum(arr){

    if(arr[0] != 0){
        arr.unshift("0");
    }

   // loop untill the arr[0];
    sum(arr);

    function sum(arraySecond){

        return arr;
        var Totalsum = 0;
        if(n == 0){
            return 0;
        }else{

            Totalsum = Totalsum + arr[n];
            console.log(Totalsum);
            --n;
            sum(n);

        }

        return Totalsum;
    }


}


  console.log(sum(array));