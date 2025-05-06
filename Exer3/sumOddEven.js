let sumEven = 0;
let sumOdd = 0;
function sumOddEven(start, end) {
  if (start < end) {
    for (let counter = start; counter <= end; counter++) {
      counter % 2 == 0 ? (sumEven += counter) : (sumOdd += counter);
    }
    const evenAndodd = {
      oddSum: sumOdd,
      evenSum: sumEven,
    };
    return evenAndodd;
  } else {
    return new Error(
      "Please make the first number smaller than the second number."
    );
  }
}

console.log(sumOddEven(1, 10));
