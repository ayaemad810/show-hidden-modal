'use strict'
const modal = document.querySelector('.modal');
const overLay = document.querySelector('.overlay')
const closebtn = document.querySelector('.close-modal')
const openModelBtns = document.querySelectorAll('.show-modal');
const closeModel =function () {
        modal.classList.add('hidden');
        overLay.classList.add('hidden') 
}
const openModel = function () {
        modal.classList.remove('hidden');
        overLay.classList.remove('hidden')
    }
for(let i = 0; i < openModelBtns.length; i++){
    openModelBtns[i].addEventListener('click', openModel)
    
    closebtn.addEventListener('click' , closeModel)
    overLay.addEventListener('click' , closeModel)
}

document.addEventListener('keydown' , function (e){
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        
            closeModel() 
        
    }

})