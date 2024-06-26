const carpetaImagenes = 'Arch/'

reviews = [
    {
        id: 1,
        author: "Portfolio fotografia",
        job: "Tellechea_fotografia",
        img: `${carpetaImagenes}img1.webp`,
        text:
            "Portfolio fotografico, donde se pueden ver mi trabajo como fotografa "
    },
    {
        id: 2,
        author: "Portfolio fotografia",
        job: "-",
        img: "https://www.imgacademy.com/sites/default/files/legacy-hotel-20.jpg",
        text:
            "-----------"
    },

]
const url = document.getElementById("url")
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");


let currentItem = 0;


window.addEventListener('DOMContentLoaded', function () {
    showPerson();
});

function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.author;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length - 1){
        currentItem= 0;
    }
    showPerson();
    console.log(currentItem);
});

prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0){
        currentItem= reviews.length -1;
    }
    showPerson();
    console.log(currentItem);
});


