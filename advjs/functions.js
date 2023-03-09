function greetUser(name = "Dave") {
  console.log(`Hi ${name}!`);
}

function sumUp(...numbers) {
  let result = 0;
  for (k of numbers) {
    result += k;
  }
  console.log(result);
}

greetUser();
sumUp(1, 2, 3);
sumUp(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
sumUp([1, 2, 3]);
sumUp(...[1, 2, 3]);

// if you use the ... (spread) operator on object, it gets you the values withut actually being the object itself

const hobbies = ["Sports", "Cooking"];

hobbies.push("Reading");
console.log(hobbies);

const person = {
  age: 40,
};

function howOld(p) {
  return p.age - 18;
}

console.log(howOld(person));
