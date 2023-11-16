'use strict';



/**
 * navbar toggle
 */

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElemArr = [navOpenBtn, navCloseBtn];

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
  });
}

/**
 * toggle navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
  });
}





/**
 * header active when window scrolled down
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 50 ? header.classList.add("active")
    : header.classList.remove("active");
});



let slideIndex1 = 1;
showSlides1(slideIndex1);
    
function plusSlides1(n) {
  showSlides1(slideIndex1 += n);
}      
function showSlides1(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides1");
  if (n > slides.length) {slideIndex1 = 1}    
  if (n < 1) {slideIndex1 = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slides[slideIndex1-1].style.display = "block"; 
  }

let slideIndex3 = 1;
showSlides3(slideIndex3);
    
function plusSlides3(n) {
  showSlides3(slideIndex3 += n);
}      
function showSlides3(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides3");
  if (n > slides.length) {slideIndex3 = 1}    
  if (n < 1) {slideIndex3 = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slides[slideIndex3-1].style.display = "block"; 
}



let slideIndex2 = 1;
showSlides2(slideIndex2);
    
function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}      
function showSlides2(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides2");
  if (n > slides.length) {slideIndex2 = 1}    
  if (n < 1) {slideIndex2 = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slides[slideIndex2-1].style.display = "block"; 
  }


  /*ovo je kod nekoga ko zna sta radi*/

  let otvoreni = [0, 0, 0, 0]
  function cardOpen( idx ) {
    let card = document.getElementById('service' + idx);
    let p = card.children[2];
    let link = card.children[3];

    if ( otvoreni[idx - 1] == 0 ) {
        link.innerHTML = '<span>Sakrij</span><ion-icon name="arrow-up" aria-hidden="true"></ion-icon>'
        p.style.whiteSpace = "normal";
        p.style.maxWidth = "fit-content";
        otvoreni[idx - 1] = 1;
      } else {
        link.innerHTML = '<span>Pročitaj više</span><ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>'
        p.style.whiteSpace = "nowrap";
        p.style.maxWidth = "200px";
        otvoreni[idx - 1] = 0;
      }

  }

  let imgIdx = 1, imgNum = 4;
  let slika1 = document.getElementById("slika1");
  let slika2 = document.getElementById("slika2");

  slika2.addEventListener("animationiteration", function() {  
    slika1.children[0].src = "./assets/images/hero" + imgIdx + ".jpg"
    slika2.children[0].src = "./assets/images/hero" + (imgIdx + 1) % imgNum + ".jpg"
    imgIdx++;
    imgIdx = imgIdx % imgNum;
    // console.log(slika1.style.backgroundImage);
    // console.log("asdsadasd")
  })

