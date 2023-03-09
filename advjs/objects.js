const job = {
  title: "Developer",
  location: "New York",
  salary: 100000,
};

console.log(new Date().toDateString());

console.log(new Date());

// object templates == CLASSES

class Job {
  constructor(jobTitle, place, salary) {
    (this.title = jobTitle), (this.location = place);
    this.salary = salary;
  }
  describe() {
    console.log(
      `I'm a ${this.title}, I work in ${this.location} for $${this.salary} `
    );
  }
}
const developer = new Job("Developer", "New York", 75000);
// console.log(developer);

developer.describe();
