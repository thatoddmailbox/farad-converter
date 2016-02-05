$(document).ready(function() {
	$("#num").change(function() {
		var inVal = $("#num").val();
		var faradVal = 0;
		var inUnits = $("#in-units").val();
		if (inUnits == "f") {
			faradVal = inVal * 1;
		} else if (inUnits == "u") {
			faradVal = inVal / 1000000;
		} else if (inUnits == "n") {
			faradVal = inVal / 1000000000;
		} else if (inUnits == "p") {
			faradVal = inVal / 1000000000000;
		}
		console.log(faradVal);
		var output = "";
			output += faradVal;
			output += " farad<br />";
			output += (faradVal * 1000000);
			output += " microFarad (uF)<br />";
			output += (faradVal * 1000000000);
			output += " nanoFarad (nF)<br />";
			output += (faradVal * 1000000000000);
			output += " picoFarad (pF)<br />";
		$("#result").html(output);
	});
});
