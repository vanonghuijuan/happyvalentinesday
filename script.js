// function myFunction() {
//   idArray = new Array()
//   idArray [1] = "Thank you for making everyday fun for me", image
//   idArray [2] = "Thank you for cooking for me"
//   idArray [3] = "Thank you for taking care of me all the time"
//   idArray [4] = "Thank you for believing in me"
//   idArray [5] = "Thank you for letting me be me"
//   idArray [6] = "Thank you for loving me"
//   idArray [7] = "Thank you for spending time with me"
//   idArray [8] = "Thank you for bringing out on cute dates"
//   idArray [9] = "Thank you for making me laugh"
//   idArray [10] = "Thank you for playing games with me"

//   document.getElementById("select").onclick = myFunction;
//   randomParagraph = Math.floor(Math.random()*10);

//   document.getElementById("result").innerHTML = idArray[randomParagraph + 1];       
// }

function myFunction() {
  const idArray = [
    { message: "Thank you for making everyday fun for me", image: "images/yubiteme.jpeg" },
    { message: "Thank you for cooking for me", image: "images/image2.jpg" },
    { message: "Thank you for taking care of me all the time"},
    { message: "Thank you for believing in me"},
    { message: "Thank you for letting me be me"},
    { message: "Thank you for loving me"},
    { message: "Thank you for spending time with me"},
    { message: "Thank you for bringing out on cute dates"},
    { message: "Thank you for making me laugh"},
    { message: "Thank you for playing games with me"},
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