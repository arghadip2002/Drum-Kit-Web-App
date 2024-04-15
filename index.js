for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", handleClick);
}

document.addEventListener("keydown", keyboardClick);

function handleClick() {
  var buttonClick = this.innerHTML;
  makeSound(buttonClick);
  buttonAnimation(buttonClick);
}

function keyboardClick(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
}

function buttonAnimation(currentKey) {
  var activeKey = "." + currentKey;
  var activeButton = document.querySelector(activeKey);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 300);
}

function makeSound(key) {
  switch (key) {
    case "w":
      var audio1 = new Audio("sounds/tom-1.mp3");
      audio1.play();
      break;
    case "a":
      var audio2 = new Audio("sounds/tom-2.mp3");
      audio2.play();
      break;
    case "s":
      var audio3 = new Audio("sounds/tom-3.mp3");
      audio3.play();
      break;
    case "d":
      var audio4 = new Audio("sounds/tom-4.mp3");
      audio4.play();
      break;
    case "j":
      var audio5 = new Audio("sounds/crash.mp3");
      audio5.play();
      break;
    case "k":
      var audio6 = new Audio("sounds/kick-bass.mp3");
      audio6.play();
      break;
    case "l":
      var audio7 = new Audio("sounds/snare.mp3");
      audio7.play();
      break;

    default:
      console.log("Something is Wrong with ButtonClick = " + key);
      console.log(
        "Key --> " + key + " is not assigned to any keys of keyboard"
      );

      break;
  }
}
