/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


const targetDate = new Date("2239-09-30T01:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "La date est atteinte !";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
            `${days}j ${hours}h ${minutes}m ${seconds}s`;
}

updateCountdown();
const timer = setInterval(updateCountdown, 1000);

function toggleCard() {
    const countdown = document.getElementById("countdown");
    const card = document.getElementById("inviteCard");
    const arrow = document.getElementById("arrowBtn");
    const music = document.getElementById("music");
    const logo = document.querySelector(".logo");

    card.classList.toggle("open");
    arrow.classList.toggle("open");

    countdown.classList.toggle("compact");
    logo.classList.toggle("compact");

    music.play();
}
const scene = document.getElementById("cardScene");
const bouton = document.getElementById("btn");

bouton.addEventListener("click", function () {

    scene.classList.toggle("open");

    bouton.textContent = scene.classList.contains("open")
        ? bouton.dataset.back
        : bouton.dataset.front;
});