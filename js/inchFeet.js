  var inch = 35;
  var feet = inch / 12;

var vagese =  inch % 12;
var stringVagses = vagese.toString();


if (vagese != 0){
  console.log("the result is " + Math.floor(feet)  + " ft " + stringVagses + " inch");
}else{
  console.log("the reuslt is " + feet);
}




