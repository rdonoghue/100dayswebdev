let outputWindow=document.getElementById("outputwindow");
let outputHtml;

outputHtml = "<p>This is a test</p>";

show(outputHtml);


function show(output, destination=outputwindow){
destination.innerHtml = output;

}