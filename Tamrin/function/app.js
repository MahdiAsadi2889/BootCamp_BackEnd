// Named Function
// function textLog(text) {
//     if (!text) {
//       text = "empty Message";
//     }
//   text = text || "empty Message";
//   alert(text);
// }
// textLog("hello Mohammad Mahdi");

// function min(num1, num2) {
// if(num1<num2){
//     return num1
// }
// else{
//     return num2;
// }

//    return num1 < num2 ? num1 : num2;
//  }

//  console.log("Minimum Number: ", min(12, 34));

// function pow(num1,num2) {
//      let temp = 1;
//     for (let counter = 0; counter < num2; counter++) {
//          temp*=num1
//      }
//      return temp;
//     return num1 ** num2
// }

// console.log(pow(2,4));

let ShowYes = function () {
  alert("Yes I'm Developer");
};
let ShowNo = function () {
  alert("No I'm not Developer");
};

let Ask = function (question, yes, no) {
  confirm(question) ? yes() : no();
};

Ask("Are you Developer?", ShowYes, ShowNo);
