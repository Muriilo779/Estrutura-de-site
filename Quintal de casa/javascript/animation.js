//variavel para salvar os elementos com a classe hidden
const hiddenClass = document.querySelectorAll('.hidden');

//observador que ira funcionar a qualquer momento que a visibilidade de um elemento mudar
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        //Esta intersectando?
        if(entry.isIntersecting)
        {
            //Adcionar uma classe
            entry.target.classList.add('show');
        }
        else
        {
            entry.target.classList.remove('show');
        }
    })
});

//chamando o metódo observer com a variavel hidden
hiddenClass.forEach((el) => observer.observe(el));