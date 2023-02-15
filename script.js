//Слайдер
const slide = document.querySelectorAll('.slide');
const right = document.querySelector('#right');
const left = document.querySelector('#left');
let position = 0;
let width = slide[0].offsetWidth;
right.addEventListener('click', ()=> {
    position += width
    if (position > (width * (slide.length - 1))){
        position = 0
    }
    slide.forEach((item)=>{
        item.style.left = -position + 'px';
    })
})

left.addEventListener('click', ()=> {
    position -= width
    if (position < 0){
        position = (width * (slide.length - 1))
    }
    slide.forEach((item)=>{
        item.style.left = -position + 'px';
    })
})