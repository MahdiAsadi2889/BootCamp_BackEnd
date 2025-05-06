function filterAndsort(threshold, arr) {
  const fiterAndsorted = arr
    .filter((num) => num > threshold)
    .sort((a, b) => a - b);
  return fiterAndsorted;
}

console.log(filterAndsort(5, [1, 5, 7, 2, 3, 4, 9]));
