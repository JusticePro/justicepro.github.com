function load() {
	var x = document.getElementById("frame");
	var y = (x.contentWindow || x.contentDocument);
	if (y.document)y = y.document;
	y.body.style.backgroundColor = "red";
}