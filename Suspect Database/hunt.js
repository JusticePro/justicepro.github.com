/*
 * Hunt
 */

function tryId(textbox) {
    var id = document.getElementById(textbox).value.toLowerCase();

    if (id in hunt.hints) {
        if (hunt.hints[id] instanceof Function) {
            hunt.hints[id]();
        } else {
            showText(hunt.hints[id]);
        }
    } else {
        alert("Id does not exist.");
    }

}

function showText(text) {
    document.getElementById("hint").innerHTML = text;

}

function onLoad() {
    document.getElementById("title").innerText = hunt.name;
}

var hunt = {
    hints: {},
    name: "Hunt.js"
};

var hunt_version = "1.0";

console.log("Hunt.js " + hunt_version);