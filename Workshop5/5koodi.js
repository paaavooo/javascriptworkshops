//Harjoitus 1

function validateForm() {
  // kenttien arvot
  var email = document.getElementById("email").value;
  var comment = document.getElementById("comment").value;

  // virheviestit
  var emailError = document.getElementById("emailError");
  var commentError = document.getElementById("commentError");

  // alustetaan virhetilanteet
  var isValid = true;
  emailError.textContent = "";
  commentError.textContent = "";

  // sähkpostin pituus ja @ merkki
  if (email.trim() === "") {
      emailError.textContent = "Please provide your email address.";
      document.getElementById("email").style.border = "2px solid red";
      isValid = false;
  } else if (email.length < 6 || email.length > 15 || !email.includes('@')) {
      emailError.textContent = "Email should be between 6-15 characters and contain '@'.";
      document.getElementById("email").style.border = "2px solid red";
      isValid = false;
  } else {
      document.getElementById("email").style.border = "";
  }

  // tarkistetaan onko kommenttia
  if (comment.trim() === "") {
      commentError.textContent = "Comment cannot be empty.";
      document.getElementById("comment").style.border = "2px solid red";
      isValid = false;
  } else {
      // max 50 kirjainta
      comment = comment.trim().substring(0, 50);
      document.getElementById("comment").style.border = "";
  }

  // jos kaikki kunnossa näytetään alert missä kenttien tiedot
  if (isValid) {
      var message = "Email: " + email + "\nComment: " + comment;
      alert(message);
  }

  return isValid;
}


// harjoitus 2

document.querySelector("#theForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // haetaan jäsenyyden tyyppi ja vuosien määrä
  const type = document.querySelector("#type").value;
  const years = parseInt(document.querySelector("#years").value);
  const costField = document.querySelector("#cost");

  // hinnat
  let membershipCost;
  if (type === "basic") {
      membershipCost = 10;
  } else if (type === "premium") {
      membershipCost = 15;
  } else if (type === "gold") {
      membershipCost = 20;
  } else if (type === "platinum") {
      membershipCost = 25;
  }

  // kokonaishinnat
  let totalCost = membershipCost * years;
  let discountMessage = '';
  let greetingMessage = '';

  // alennukset
  if (years >= 2) {
      const discount = totalCost * 0.2;
      totalCost -= discount;
      discountMessage = 'You qualify for a 20% discount!';
  }

  if (years >= 5) {
      totalCost -= 5;
      greetingMessage = 'Thank you for your commitment! You get an additional 5€ off!';
  }

  costField.value = `${totalCost.toFixed(2)} €`;
  document.querySelector("#theForm").insertAdjacentHTML("afterend", `<p>${discountMessage}</p><p>${greetingMessage}</p>`);
});

// harjoitus 3

function calculateOrder() {
  // kenttien arvot ja sopivat tyypit
  let quantity = parseInt(document.querySelector("#quantity").value);
  let price = parseFloat(document.querySelector("#price").value);
  let tax = parseFloat(document.querySelector("#tax").value);
  let discount = parseFloat(document.querySelector("#discount").value);
  let shipping = parseFloat(document.querySelector("#shipping").value);

  // jos määrä yli sata alennus x2
  if (quantity > 100) {
      discount *= 2;
  }

  // kokonaishinta
  let subtotal = (price * quantity) - discount;

  // verot
  let taxAmount = (subtotal * (tax / 100));

  // kokonaishinta veroineen ja toimituksineen
  let total = subtotal + taxAmount + shipping;

  // loppusumma
  document.querySelector("#total").value = total.toFixed(2);
}


// harjoitus 4

function toggleDetails() {
  const contactMethod = document.getElementById("contact-method").value;
  const contactDetailsDiv = document.getElementById("contact-details");

  if (contactMethod) {
      contactDetailsDiv.style.display = "block";
  } else {
      contactDetailsDiv.style.display = "none";
  }
}
