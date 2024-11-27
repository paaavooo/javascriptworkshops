//Harjoitus 1

function changeHeading() {
  document.getElementById("main-heading").textContent = "Modified Heading!";
}

function secondButton() {
  const heading = document.getElementById("exercise2-heading");
  heading.style.fontSize = "24px";
  heading.style.color = "blue";
  heading.style.fontStyle = "italic";
  heading.style.backgroundColor = "yellow";
}

function thirdButton() {
  const para = document.createElement("p");
  para.innerHTML = `<em>"Lorem ipsum* dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu. Sed arcu lectus auctor vitae, consectetuer et venenatis eget velit. "*</em>`;
  document.querySelectorAll("p")[3].after(para);

  document.body.style.backgroundColor = "lightgray";
  const img = document.createElement("img");
  img.src = "oravakuva.jpg";
  img.style.width ="100px";
  img.style.height = "auto";
  para.appendChild(img);
}

//Harjoitus 2

function hide() {
  document.getElementById("me").style.display = "none";
}

function show() {
  document.getElementById("me").style.display = "block";
}

function styleSurprise() {
  document.querySelectorAll(".surprise").forEach(el => {
    el.style.fontSize = "20px";
  });
}

//Harjoitus 3
function showChoice() {
  const choice = document.getElementById("mySelect").value;
  alert(`You selected: ${choice}`);
  const image = document.getElementById("carimage");

  if (choice === "BMW") {
    image.src = "bmwkuva.jpg";
  } else if (choice === "Audi") {
    image.src = "audikuva.webp";
  } else if (choice === "Mercedes") {
    image.src = "mersukuva.jpg";
  } else if (choice === "Volvo") {
    image.src = "volvokuvaa.jpg";
  }
}

function addBorder() {
  const img = document.getElementById("carimage");
  img.style.border = "5px solid red";
}

function removeBorder() {
  const img = document.getElementById("carimage");
  img.style.border = "none";
}

//Harjoitus 4
function changePosition() {
  const img = document.getElementById("carimage");
  img.style.position = "relative";
  img.style.left = "200px";
  img.style.top = "500px";
}

let direction = 1;
function doMove() {
  const img = document.getElementById("carimage");
  const currentLeft = parseInt(img.style.left || "0");
  img.style.left = `${currentLeft + 10 * direction}px`;

  if (currentLeft > 400 || currentLeft < 0) direction *= -1;
}

function fadeOut() {
  const img = document.getElementById("carimage");
  const currentOpacity = parseFloat(img.style.opacity || "1");
  if (currentOpacity > 0) img.style.opacity = currentOpacity - 0.1;
}

function remove() {
  const img = document.getElementById("carimage");
  img.remove();
}

//Harjoitus 5
function insertRows() {
  const table = document.getElementById("data").querySelector("tbody");
  const name = document.getElementById("textfield").value;
  const position = document.getElementById("textfield2").value;
  const salary = document.getElementById("textfield3").value;

  const row = table.insertRow();
  row.innerHTML = `<td>${name}</td><td>${position}</td><td>${salary}</td>`;
}

// Bonus
function replaceListItems() {
  document.querySelectorAll("li").forEach(li => {
    li.outerHTML = `<strong style="color:red;">Replaced</strong>`;
  });
}