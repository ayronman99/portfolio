
/**
 * Javascript function AiO
 *  This contains the script for the webpage
 * Check comments to know the info about the specific code or section 
 */


/*
    *Button script
*/

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