// select dom element

let myWindow;

const width = document.getElementById("width");
const height = document.getElementById("height");

// show window object properties

width.innerHTML = "Window inner width is:" + window.innerWidth;
height.innerHTML = "Window inner height is:" + window.innerHeight;

function openWindow() {
  myWindow = window.open("https://edvive.com");
}

function closeWindow() {
  myWindow.close();
}
