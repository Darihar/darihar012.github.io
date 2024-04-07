var myImage = document.querySelector("img");

myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "images/море.jfif") {
    myImage.setAttribute("src", "images/na-more-v-marte.jpg");
  } else {
    myImage.setAttribute("src", "images/море.jfif");
  }
};
var myButton = document.querySelector("button");
var myHeading = document.querySelector("h2");

function setUserName() {
    var myName = prompt("Привет, как вас зовут?");
    if(!myName) {
        setUserName();
      } else {
    localStorage.setItem("имя", myName);
    myHeading.textContent = "Парадиз forever, " + myName + "!!!";
      }
  }

  if (!localStorage.getItem("имя")) {
    setUserName();
  } else {
    var storedName = localStorage.getItem("имя");
    myHeading.textContent = "Парадиз forever, " + storedName + "!!!";
  }

  myButton.onclick = function () {
    setUserName();
  }