function myFunction() {
  const idArray = [
    { message: "Thank you for making everyday fun for me", image: "images/message-img/concert.png"},
    { message: "Thank you for cooking for me", image: "images/message-img/chefs.png"},
    { message: "Thank you for believing in me", image: "images/message-img/sleeping.png"},
    { message: "Thank you for letting me lean on you", image: "images/message-img/leaning.png"},
    { message: "Thank you for bringing me to eat good food", image: "images/message-img/eating.png"},
    { message: "Thank you for spending time with me", image: "images/message-img/dates.png"},
    { message: "Thank you for taking care of me", image: "images/message-img/takecare.png"},
    { message: "Thank you for playing games with me", image: "images/message-img/gaming.png"},
  ];

  const randomIndex = Math.floor(Math.random() * idArray.length);

  // Update the message and image elements
  const messageElement = document.getElementById("message");
  const imageElement = document.getElementById("image");

  messageElement.textContent = idArray[randomIndex].message;
  imageElement.src = idArray[randomIndex].image;

  // Show the message and image
  messageElement.style.display = "block";
  imageElement.style.display = "inline"; // Make sure the display is set to "inline" or "block"
}

// function to go to love-letter page
function goReadMail() {
  window.location.href = "love-letter.html"; // Replace with the actual filename of your gallery page
}

// function to go back to main page
function goBack() {
  window.history.back();
}