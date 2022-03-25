let imagens = document.querySelectorAll('.small-img');
let modal = document.querySelector('.modal');
let modal_img = document.querySelector('#modal-img');
let btClose = document.querySelector('#bt_close');
let scr_img = "";

for(let i = 0; i<imagens.length; i++) {
  imagens[i].addEventListener('click',function(){
    src_img = imagens[i].getAttribute('src');
    modal_img.setAttribute('src', src_img);
    modal.classList.toggle('modal-active');
  });

}

btClose.addEventListener('click', function(){
  modal.classList.toggle('modal-active');
});
