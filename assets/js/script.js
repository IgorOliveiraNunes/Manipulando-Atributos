function trocarImagem(filename, animalname){
document.querySelector('.imagem').setAttribute('src','assets/image/'+filename);
document.querySelector('.imagem').setAttribute('data-animal', animalname)
}

function pegaranimal(){
    let animal = document.querySelector('.imagem').getAttribute('data-animal')
    if (animal == 'Mico-leão dourado') {
        alert('Fique aonde está, que a policia esta entrando na sua casa!!!')
        alert('É serio mico leão está em extinção.')
    }else {
        alert('Seu animal é um '+animal)
    }
    
}