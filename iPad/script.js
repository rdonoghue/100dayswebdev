let outputWindow = document.getElementById("outputwindow");
let outputHtml;

outputHtml = "<p>This is a test</p>";

show(outputHtml);

function show(output, destination = outputwindow) {
  const outputBody = document.createElement("jsOutput");

  destination.innerHTML = output;
  console.log(destination.innerHTML);

  console.log(output);
}
