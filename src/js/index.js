/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

function getcolor(person) {
  switch (person) {
    case "Colonel Mustard":
      return "yellow";
    case "Mr.Green":
      return "green";
    case "Mrs.Peacock":
      return "pink";
  }
}

window.onload = function() {
  let who = [
    "Colonel Mustard",
    "Professor Plum",
    "Mr.Green",
    "Mrs.White",
    "Mrs.Peacock"
  ];
  let where = ["Hall", "Kitchen"];
  let whepon = [
    "Rope",
    "Lead Pipe",
    "Knife",
    "Wrench",
    "Candlestick",
    "Revolver"
  ];
  var finalstring = "";

  for (let i = 0; i < who.length; i++) {
    for (let b = 0; b < where.length; b++) {
      for (let c = 0; c < whepon.length; c++) {
        finalstring +=
          `<span id='personid' style="color:${getcolor(who[i])}">` +
          who[i] +
          "</span>" +
          " killed <em> Miss Scarlet </em> at " +
          where[b] +
          " Using " +
          whepon[c] +
          "<br>";
      }
    }
  }

  document.querySelector("#domain").innerHTML = finalstring;
};
