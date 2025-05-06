let input = 200;
let temp = 0;
for (let counter = 0; counter <= input; counter++) {
  if (input % counter == 0) {
    temp++;
  }
}
if (temp == 1) {
  console.log("first number: ", input);
}
else if(temp == 2){
    console.log("first number: ", input);
    
}
else{
    console.log("number: ", input);
    
}
