// Grab elements from the page
const envelope = document.querySelector(".envelope");
const intro = document.getElementById("intro");
const landing = document.getElementById("landing-page");
const music = document.getElementById("bgMusic");
const volumeSlider = document.getElementById("volumeSlider");
const title = document.querySelector(".content h1");

// Save the original title
const originalText = title.innerText;

// Clear it
title.innerText = "";

let index = 0;

// Typewriter function
function typeWriter() {

    if (index < originalText.length) {

        title.innerHTML += originalText.charAt(index);

        index++;

        setTimeout(typeWriter, 80);

    }

}

// Envelope click
envelope.addEventListener("click", () => {

    intro.style.opacity = "0";

    landing.style.opacity = "1";

    music.play();

    setTimeout(() => {

        intro.style.display = "none";

        typeWriter();

    }, 1200);
});

music.volume = 0.4;

volumeSlider.addEventListener("input", () => {

    music.volume = volumeSlider.value / 100;


});const stars = document.querySelector(".stars");

for(let i = 0; i < 40; i++){

    const star = document.createElement("span");

    star.style.top = Math.random()*100 + "%";
    star.style.left = Math.random()*100 + "%";

    star.style.animationDelay = Math.random()*3 + "s";

    star.style.width = Math.random()*4 + 2 + "px";
    star.style.height = star.style.width;

    stars.appendChild(star);

}