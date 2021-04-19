
/**
 * Javascript function AiO
 *  This contains the script for the webpage
 * Check comments to know the info about the specific code or section 
 */


/**
 * Section: Script for the certificate carousel
 *  This contains the JS for the carousel found on the about me section for the certificate
 * 
 */
const trace = document.querySelector('.carou-holder');
const certs = Array.from(trace.children);
const goRight = document.querySelector('.to-right');
const goLeft = document.querySelector('.to-left');
const carouBullet = document.querySelector('.carou-bullet');
const bullets = Array.from(carouBullet.children);


const certWidth = certs[0].getBoundingClientRect().width;

const setCertPos = (cert, index) => {
    cert.style.left = certWidth * index  + 'px';
}

certs.forEach(setCertPos);



const classModifier = (trace, curr, aim) => {
    trace.style.transform = 'translateX(-' + aim.style.left + ')';
    curr.classList.remove('curr-slide');
    aim.classList.add('curr-slide');
}

const bulletPlacer = (nowBullet, aimBullet) => {
    nowBullet.classList.remove('curr-slide');
    aimBullet.classList.add('curr-slide');
}

const arrowModifier= (certs, goLeft, goRight, targetIndex) => {
    if(targetIndex === 0){
        goLeft.classList.add('go-hide');
        goRight.classList.remove('go-hide');
    } else if (targetIndex === certs.length - 1) {
        goLeft.classList.remove('go-hide');
        goRight.classList.add('go-hide');
    } else {
        goLeft.classList.remove('go-hide');
        goRight.classList.remove('go-hide');
    }
}


goLeft.addEventListener('click', l => {
    const currentCert = trace.querySelector('.curr-slide');
    const prevCert = currentCert.previousElementSibling;
    const currBullet = carouBullet.querySelector('.curr-slide');
    const prevBullet = currBullet.previousElementSibling;
    const prevCertIndex = certs.findIndex(cert => cert === prevCert);
   

    classModifier(trace, currentCert, prevCert);
    bulletPlacer(currBullet, prevBullet);
    arrowModifier(certs, goLeft, goRight, prevCertIndex); 
})


goRight.addEventListener('click', l => {
    const currentCert = trace.querySelector('.curr-slide');
    const nextCert = currentCert.nextElementSibling;
    const currBullet = carouBullet.querySelector('.curr-slide');
    const nextBullet = currBullet.nextElementSibling;
    const nextCertIndex = certs.findIndex(cert => cert === nextCert);

    classModifier(trace, currentCert, nextCert);
    bulletPlacer(currBullet, nextBullet);
    arrowModifier(certs, goLeft, goRight, nextCertIndex); 
})

carouBullet.addEventListener('click', l => {
    const targetBullet = l.target.closest('button');

    if(!targetBullet) return;
    
    const currCert = trace.querySelector('.curr-slide');
    const currBullet = carouBullet.querySelector('.curr-slide');
    const targetIndex = bullets.findIndex(bullet => bullet === targetBullet);
    const targetCert = certs[targetIndex];

    classModifier(trace, currCert, targetCert);
    bulletPlacer(currBullet, targetBullet);
    arrowModifier(certs, goLeft, goRight, targetIndex);  
})

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