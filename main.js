// References
const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('#header .header .container');


hamburger.addEventListener('click', ()=> {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
}); 

// document.addEventListener('scroll',() => {
//     var scroll_position = window.scrollY;
//     if(scroll_position > 250) {
//         header.style.backgroundColor = "#29323c";
//     } else {
//         header.style.backgroundColor ="transparent"  
//     }
// });

// countries API

document.addEventListener('DOMContentLoaded', () => {

  const selectDrop = document.querySelector('#country');
  // const selectDrop = document.getElementById('countries');


  fetch('https://restcountries.com/v3.1/all')
  .then(res => {
    return res.json();
  }).then(data => {
    console.log(data);
    
    let output = "";
    data.forEach (country => {
      output += `
      
      <option value="${country.name.common}">${country.name.common}</option>`;
    })

    selectDrop.innerHTML = output;
  }).catch(err => {
    console.log(err);
  })


});

// Selection of projects

// let selection = document.getElementById('select');
// let result = document.getElementById('result');

// selection.addEventListener('change', () => {
//   result.innerText = selection.options[selection.selectedIndex].text;
//   console.log(selection.selectedIndex);
// });

// function showProject() {
//  let select = document.getElementById('select').value;
//   if (select == "games") {
//     document.getElementById("game").style.display="block";
//     console.log(games)
    
//   }
//   else {
//     document.getElementById("game").style.display="none";
//   }
  
// }




// references section

let slideIndex = 1;
showSlides(slideIndex)

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
};



// top button
let myButton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
};

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

topFunction();






