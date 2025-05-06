// let myList = "Mahdi, Ali, Hassan, Ahmad";
// const arr = myList.split(", ");
// console.log(arr);

const myArr = [1, 2, 3, 4, 5, 6, 7];

const res = myArr.reduce((prev, curr) => {
  return prev + curr;
}, 0);
console.log("Result:", res);
