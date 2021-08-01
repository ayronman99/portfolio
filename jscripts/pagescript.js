
/**
 * Javascript function AiO
 *  This contains the script for the webpage
 * Check comments to know the info about the specific code or section 
 */



/** Navigation bar JS **/

const showNav = () =>{
    
    let navbar = document.getElementById('navibar');
    /*console.log(scrollY) 
    if(window.scrollY >= 632){
        navbar.classList.remove('nobar')
      } else {
        navbar.classList.add('nobar')
      }
       */ 
    if(window.scrollY >= 632){
        navbar.classList.add('nobar')
      } else {
        navbar.classList.remove('nobar')
      }
}

window.addEventListener('scroll', showNav)
/*  *Button script     */

const notYet = () => {
    window.alert('Function not yet implemented.');
}


/**
 * Section: Contact info
 *  This contains the JS for the contact page which modifies the css to have an nani-mation.(Nani?!?!)
 * Thanks to True Code for this idea(https://www.youtube.com/watch?v=rpujWVkmiPE&t=898s)
 */

const putin = document.querySelectorAll('.input');

function styleFocuser(){
    let progenitor = this.parentNode;
    progenitor.classList.add('focus');
}

function styleBlurrier(){
    let progenitor = this.parentNode;
    if(this.value == ''){
        progenitor.classList.remove("focus");
    }
}

putin.forEach((input) => {
    input.addEventListener('focus', styleFocuser);
    input.addEventListener('blur', styleBlurrier);
})

/* nav menu */

const burjir = document.querySelector('#burger');
const navig = document.querySelector('#nav-holder');

document.onclick = function(e){
    if(e.target.id !== 'burger' && e.target.id !== 'nav-holder'){
        burjir.classList.remove('clicked');
        navig.classList.remove('active');
    }
}

burjir.onclick = function(){
    burjir.classList.toggle('clicked');
    navig.classList.toggle('active')
}