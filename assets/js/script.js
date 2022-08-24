function trocarImagem(filename, animalname){
document.querySelector('.imagem').setAttribute('src','assets/image/'+filename);
document.querySelector('.imagem').setAttribute('data-animal', animalname)
}

function pegaranimal(){
    let animal = document.querySelector('.imagem').getAttribute('data-animal')
    if (animal == 'Mico-leão dourado') {
        alert('Fique aonde está,já direcionamos uma viatura pra sua CASA!!')
        alert('É sério mico-leão não é um animal de estimação!!.')
    }else {
        alert('Seu animal é um '+animal)
    }
    
}