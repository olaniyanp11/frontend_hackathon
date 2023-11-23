/**
 *  @switch: closes and opens theboxex and changes the arror
 * @closenotification: closes the notification bar
 */

// let add = document.querySelectorAll(".add");
let count = (document.getElementById("count").innerHTML = 0);

function showinner(num) {
  let box = document.querySelectorAll("#mainbox");
  let element = document.querySelectorAll(".subinner");
  let circle = document.querySelectorAll(".circlebtn");
  if (circle[num].style.backgroundImage === "") {
    circle[num].classList.toggle("add");
  }
  changecount();
  for (let i = 0; i < element.length; i++) {
    element[i].style.display = "";
    box[i].style.backgroundColor = "#fff";
  }
  if (element[num].style.display === "") {
    element[num].style.display = "flex";
    box[num].style.backgroundColor = "#F3F3F3";
  }
}

function Switch() {
  let arrow = document.getElementById("arrow");
  let mainbox = document.getElementById("subprocesses");
  arrow.classList.toggle("switch");
  mainbox.classList.toggle("switch");
}
function closenotification() {
  let box = document.getElementsByClassName("notification");
  box[0].style.display = "none";
}
function changecount() {
  let add = document.querySelectorAll(".add");
  console.log(add);
  let count = (document.getElementById("count").innerHTML = add.length);
  let progress = document.getElementById("progressvalue");
  const width = count * 20;
  progress.style.width = width + "%";
}
