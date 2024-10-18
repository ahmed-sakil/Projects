
const slideShowElements = document.querySelectorAll('.slideShow_element');

let countElements = 1;

setInterval(() => {
    countElements ++;
    const currentElement = document.querySelector('.current');
    currentElement.classList.remove('current');

    if(countElements > slideShowElements.length){
        slideShowElements[0].classList.add('current')
        countElements = 1;
    }
    else{
        currentElement.nextElementSibling.classList.add('current');
    }

},2000);