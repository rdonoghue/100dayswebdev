// Practice what you learned!

// 1) Select the two <button> elements and store them in two different variables.
//    - Select the first button without adding or using any "id"
//    - Select the second button by using an "id"
const button1 = document.querySelector("button");
const button2 = document.querySelector("#button2");

// 2) Add "click" event listener to both buttons (with two different functions).
//    The functions should "console.dir()" the clicked buttons.
//    - Output the first button by using the variable in which it's stored
//    - Output the second button WITHOUT using the variable in which it's stored

// button1.addEventListener("click", function () {
//   console.log(button1);
// });
// button2.addEventListener("click", function () {
//   console.dir(this);
// });

// 3) Now select and store the paragraphs mentioned in the text you see on the page
//    (first and third paragraph)
//    - Select BOTH paragraphs by drilling into the document and "navigating" to the
//      mentioned elements
//    - If you struggle with DOM drilling, use "ids" instead but watch the solution!

const para1 = document.body.children[2].children[1];
const para2 = document.body.children[2].children[3];

console.log(para2);

// 4) Change the functions from (2) such that:
//    - The first button removes the third paragraph (i.e. the <p> prior to it)
//    - The second button changes the background color of the first paragraph to blue
// button1.addEventListener("click", function () {
//   para1.style.display = "none";
//   //   para2.remove();
// });

// button2.addEventListener("click", function () {
//   console.log(para1);
//   para1.style.backgroundColor = "lightblue";
// });

// 5) Solve (4) both by changing the "inline styles" as well as by adding CSS classes
//    Note: You'll have to add those classes to the styles.css file first!

button1.addEventListener("click", function () {
  para2.classList.toggle("removed");
});

button2.addEventListener("click", function () {
  para1.classList.toggle("highlighted");
});

let sample = ["foo", "bar", "bass"];

for (let k in sample) {
  console.log(k);
}

for (let k of sample) {
  console.log(k);
}
