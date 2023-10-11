'use strict';
//elements that trigger events
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

//open modal window and add overlay
const openModal = function() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
//close modal window and overlay
const closeModal = function(){
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}
//add event for all buttons to trigger popup
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}
//add events to close popup window
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
//ESC keypress to close window
document.addEventListener('keydown', function(e){
  if(e.key === "Escape" && !modal.classList.contains('hidden')){
    closeModal();
  }
})

