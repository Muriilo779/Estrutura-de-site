let imagens = document.querySelectorAll('.small-img'); //Lista de todos os elementos smallImg
let modal = document.querySelector('.modal');          //Variavel que salva a imagem selecionada
let modal_img = document.querySelector('#modal-img');  //variavel que salva a imagem selecionada 
let btClose = document.querySelector('#bt_close');     //O x que serve de enfeite
let scr_img = "";                                      //variavel que vai pegar o source da imagem selecionada

for(let i = 0; i<imagens.length; i++) 
{
  imagens[i].addEventListener('click',function() //Para qualquer imagem que teve o evento click
  {
    src_img = imagens[i].getAttribute('src'); //Pegando o source da imagem selecionada
    modal_img.setAttribute('src', src_img);   //ModalImg vai atribuir o source da imagem "aumentada" para o source que salvamos na ultima linha 
    modal.classList.toggle('modal-active');   //Ativa a classe modalActive 
  });

}
//Quando clicamos no modal (ocupa a tela toda)
modal.addEventListener('click', function(){
  modal.classList.toggle('modal-active');   //Desativa a classe modalActive
});
