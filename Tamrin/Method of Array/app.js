let names = [
  "Mahdi",
  "Ali",
  "Dastaan",
  "Heydar",
  "Mersad",
  "Saleh",
  "Fazel",
  "Javad",
];

// names.splice(1,2);
names.splice(0, 2, "Mahdi");
console.log(names);
console.log("------------------");

let skills = ["js", "c#", "java", "c++", "python", "ruby"];

skills.forEach((item, key) => {
  console.log(item, ":", key);
});
console.log("------------------");
const res1 = skills.find((skill) => {
  if (skill == "c++") {
    console.log(skill);
  }
});

console.log("------------------");
const res2 = skills.find((skill) => skill == "c");
console.log(res2);
