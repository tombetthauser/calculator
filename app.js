var calcBtn = document.getElementById("calculate");
var resetBtn = document.getElementById("reset");
var resSpan = document.getElementById("resultsSpan");
var x;

calcBtn.onclick = function() {
	var select = document.getElementById("select").value;
	var numOne = Number(document.getElementById("inputOne").value);
	var numTwo = Number(document.getElementById("inputTwo").value);
	var oneNaN = isNaN (numOne);
	var twoNaN = isNaN (numTwo);
	if (oneNaN == true || twoNaN == true) {
		resSpan.placeholder = "Error, please try again...";
		resSpan.value = "";
	} else if (select == "add") {
		resSpan.value = numOne + numTwo;
	} else if (select == "subtract") {
		resSpan.value = numOne - numTwo;
	} else if (select == "multiply") {
		resSpan.value = numOne * numTwo;
	} else if (select == "divide") {
		resSpan.value = numOne / numTwo;
	} else if (select == "square") {
		resSpan.value = numOne * numOne;
	} else if (select == "root") {
		if (numOne < 0) {
			resSpan.value = Math.sqrt(Math.abs(numOne)) + "i";
		} else {
			resSpan.value = Math.sqrt(numOne);
		}
	}
}

resetBtn.onclick = function() {
	document.getElementById("inputOne").value = "";
	document.getElementById("inputTwo").value = "";
	document.getElementById("select").value = "add";
		resSpan.placeholder = "Your Results...";
	resSpan.value = "";
}

// calcBtn.onclick = function() {
// 	var r = numOne + numTwo;
// 	resDiv.innerHTML = r;
// 	alert(select);
// }