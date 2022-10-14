//para mostrar qual prato foi selecionado

const foodOne = document.querySelector(".menu-option1");
const foodTwo = document.querySelector(".menu-option2");
const foodThree = document.querySelector(".menu-option3");

function choiceFoodOne (){
    foodOne.classList.toggle('border-check');
}

function choiceFoodTwo (){
    foodTwo.classList.toggle('border-check');
}

function choiceFoodThree (){
    foodThree.classList.toggle('border-check');
}


const drinkOne = document.querySelector(".menu-option4");
const drinkTwo = document.querySelector(".menu-option5");
const drinkThree = document.querySelector(".menu-option6");

function choiceDrinkOne (){
    drinkOne.classList.toggle('border-check');
}

function choiceDrinkTwo (){
    drinkTwo.classList.toggle('border-check');
}

function choiceDrinkThree (){
    drinkThree.classList.toggle('border-check');
}

const dessertOne = document.querySelector(".menu-option7")
const dessertTwo = document.querySelector(".menu-option8");
const dessertThree = document.querySelector(".menu-option9");

function choiceDessertOne (){
    dessertOne.classList.toggle('border-check');
}

function choiceDessertTwo (){
    dessertTwo.classList.toggle('border-check');
}

function choiceDessertThree (){
    dessertThree.classList.toggle('border-check');
}
//condição para selecionar apenas um ítem
