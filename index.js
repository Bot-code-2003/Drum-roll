var drumButtons = document.querySelectorAll(".drum");
var drumNumber = drumButtons.length;

for (var i = 0; i < drumNumber; i++) {
    drumButtons[i].addEventListener("click", function () {
        handleButtonClick(this.innerHTML);
    });
}

document.addEventListener("keypress", function (e) {
    handleButtonClick(e.key.toLowerCase()); 
});

function handleButtonClick(key) {
    for (var j = 0; j < drumNumber; j++) {
        drumButtons[j].style.color = "#427D9D";
        drumButtons[j].style.backgroundColor = "#b4ccff";
        drumButtons[j].style.border = "12px solid #164863";
    }

    var clickedButton = document.querySelector(".drum." + key);
    if (clickedButton) {
        clickedButton.style.color = "#e6e600";
        clickedButton.style.backgroundColor = "#ffffba";
        clickedButton.style.border = "12px solid orange";
    }

    makeSound(key);
}

function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            console.log();
    }
}
