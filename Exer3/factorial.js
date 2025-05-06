function factorial(n) {
  // Start Recursive method
  //   if (n < 0) {
  //     return new Error("Error");
  //   } else if (n == 0) {
  //     return 1;
  //   } else {
  //     return n * factorial(n - 1);
  //   }
  // End Recursive method

  // Start Iterative method
  let res = 1;
  for (let i = n; i > 0; i--) {
    res *= i;
  }
  return res;
  // End Iterative method
}

console.log("Result:", factorial(4));
