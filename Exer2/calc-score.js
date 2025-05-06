// Calculate Score of Students

class Student {
  #name;
  #grades = [];
  constructor(name, grades = []) {
    this.#name = name;
    this.#grades = grades;
  }
  get name() {
    return this.#name;
  }
  get grades() {
    return this.#grades;
  }
  addGrade(grade) {
    this.#grades.push(grade);
  }
  getAverage() {
    const sum = this.#grades.reduce((acc, grade) => acc + grade, 0);
    const average = sum / this.#grades.length;
    return average;
  }
  getDetails() {
    return `${this.#name}: Grade = ${this.#grades}, Average:${this.getAverage()}`;
  }
}

const student1 = new Student("Mahdi");

student1.addGrade(19);
student1.addGrade(17);
student1.addGrade(12);
student1.addGrade(20);
student1.addGrade(15);

console.log(student1.getDetails());

