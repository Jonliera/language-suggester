window.onload = function() {
  const form = document.querySelector("form");
  form.onsubmit = function (event){
    event.preventDefault();



let html = document.getElementById("html");
html.setAttribute("class", "hidden");
let css = document.getElementById("css");
css.setAttribute("class", "hidden");
let javascript = document.getElementById("javascript")
javascript.setAttribute("class", "hidden");


const focus = document.querySelector("input[name='focus']:checked");
const patterns = document.querySelector("input[name='patterns']:checked");
const solve = document.querySelector("input[name='solve']:solve");
const puzzle = document.querySelector("input[name='puzzle']:checked");
const details = document.querySelector("input[name='details']:checked");



if (focus === design && patterns === bad) {
  document.getElementById("html").removeAttribute("class");
} else if ( focus === || height >= 48) {
  document.getElementById("css").removeAttribute("class");
} else if (age >= 6) {
  document.getElementById("javascript").removeAttribute("class");
}
