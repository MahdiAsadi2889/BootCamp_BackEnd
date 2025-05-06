function multiply() {
  let numbers = [];

  for (let i = 0; i < arguments.length; i++) {
    if (!numbers.includes(arguments[i])) {
      numbers.push(arguments[i]);
    }
  }

  let result = 1;

  for (let i = 0; i < numbers.length; i++) {
    result *= numbers[i];
  }

  return result;
}

console.log(multiply(2, 4, 6, 2));
