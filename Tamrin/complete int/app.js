let input = 18;
let temp = 0;
for (let counter = 0; counter < input; counter++) {
    
    if(input % counter == 0){
        temp = temp + counter;
    }
}

if(temp == input){
    console.log("Perfect Number: " , temp);
}
else{
    console.log("Not Perfect Number: ", temp);
    
}