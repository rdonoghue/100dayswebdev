let outputWindow = document.getElementById("outputwindow");
let outputHTML = "";

outputHTML = addOutput("This is a second test");
outputHTML = addOutput("and this");

show(outputHTML);

function show(output, destination = outputwindow) {
  destination.innerHTML = output;
}

function addOutput(outputString, outputBlock = outputHTML) {
  outputBlock += "<p>" + outputString + "</p>";
  return outputBlock;
}
