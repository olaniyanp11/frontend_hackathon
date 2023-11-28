/**
 * Toggles the visibility of subinner boxes, changes circle button state, and updates count.
 * @param {number} num - The index of the clicked circle button.
 */

// let add = document.querySelectorAll(".add");
let count = (document.getElementById("count").innerHTML = 0);
let progress = document.getElementById("progressvalue");
const width = count * 20;
progress.style.width = width + "%";

function showInner(num) {
  let box = document.querySelectorAll("#mainbox");
  let element = document.querySelectorAll(".subinner");
  let circle = document.querySelectorAll(".circlebtn");

  // Toggle the 'add' class on the clicked circle button
  if (circle[num].style.backgroundImage === "") {
    circle[num].classList.toggle("add");
  }

  // Update the count and display the corresponding subinner box
  changeCount();

  for (let i = 0; i < element.length; i++) {
    element[i].style.display = "";
    box[i].style.backgroundColor = "#fff";
  }
  if (element[num].style.display === "") {
    element[num].style.display = "flex";
    box[num].style.backgroundColor = "#F3F3F3";
  }
}

/**
 * Toggles the visibility of subprocesses and changes the arrow icon state.
 */
function Switch() {
  let arrow = document.getElementById("arrow");
  let mainbox = document.getElementById("subprocesses");

  // Toggle the 'switch' class on the arrow and mainbox elements
  arrow.classList.toggle("switch");
  mainbox.classList.toggle("switch");
}


/**
 * Closes the notification bar.
 */
function closeNotification() {
  let box = document.getElementsByClassName("notification");
  box[0].style.display = "none";
}

/**
 * Updates the count based on the number of elements with the 'add' class,
 * and adjusts the progress bar width accordingly.
 */
function changeCount() {
  let add = document.querySelectorAll(".add");
  console.log(add);
  let count = (document.getElementById("count").innerHTML = add.length);
  let progress = document.getElementById("progressvalue");
  const width = count * 20;
  progress.style.width = width + "%";
}

function show() {
  let obj = document.getElementsByClassName('allnotifications')
  obj[0].classList.toggle("none")
}
function go() {
  window.location.href = "https://admin.shopify.com";
}