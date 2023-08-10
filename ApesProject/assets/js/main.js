// MENU SHOW 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if(toggle && nav) {
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }    
}

showMenu('nav-toggle', 'nav-menu')

// REMOVE MENU MOBILE 
const navLink = document.querySelectorAll(`.nav__link`)
function linkAction(){
    // Active link 
    navLink.forEach(n => n.classList.remove(`active`))
    this.classList.add(`active`)

    // Remove Menu MOBILE 
    const navMenu = document.getElementById(`nav-menu`)
    navMenu.classList.remove(`show`)
}

navLink.forEach(n =>n.addEventListener(`click`, linkAction))

/*
// SLIDESHOW 

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}
*/
