const nums = [2, 6, 1, 0, 67, 34, 21, 56];
const nums2 = [2, 6, 1, 0, 67, 34, 21, 56];
// این کد پایین براساس حروف الفبا مرتب میکند نه براساس وزن عدد
const num1 = nums.sort();
// -----------------

// کد پایین براساس وزن حرف مرتب سازی میکند
const num2 = nums2.sort((a, b) => {
  return a - b;
});

console.log(num1);
console.log("-----------------");
console.log(num2);


