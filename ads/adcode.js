// JavaScript Document

var ads = [
	"/ads/theyogurtfamily.html",
	"/ads/embergames.html"
];

document.getElementsByName("justicehub-ad").forEach(function(item, index, array) {
	var selectedAd = Math.floor(Math.random() * ads.length);
	console.log(selectedAd);
	item.setAttribute("src", ads[selectedAd]);
});