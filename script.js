//para mostrar qual prato foi selecionado

let mainFinal;

function choiceFood (food){
    //verificar se existe um botão que tenha sido selecionado anteriormente
    const foodSelection = document.querySelector('.main-option .border-check');

    //se existir
    if (foodSelection !== null) {
        //remover border que está atribuída à classe selecionada anteriormente
       foodSelection.classList.remove('border-check')
    }
        
    //adicionar border à classe selecionada
    food.classList.add('border-check');

    mainFinal = food.innerHTML;
    allDone ();
}


let drinkFinal;

function choiceDrink (drink){
    
    const drinkSelection = document.querySelector('.drink-option .border-check');

    if (drinkSelection !== null){
        drinkSelection.classList.remove('border-check');
    }
 
    drink.classList.add('border-check');

    drinkFinal = drink.innerHTML;
    allDone ();
}


let dessertFinal;

function choiceDessert (dessert){
    const dessertSelection = document.querySelector('.dessert-option .border-check');

    if (dessertSelection !== null) {
        dessertSelection.classList.remove('border-check');
    }
   
    dessert.classList.add('border-check');

    dessertFinal = dessert.innerHTML;
    allDone ();
}

//liberar para APARECER o botão de fechar pedido
    //criar função para saber se cada categoria do pedido -food/dronk/dessert- foi selecionado
    function allDone (){
        if(mainFinal !== undefined){
            if(drinkFinal !== undefined){
                if (dessertFinal !== undefined){
                    const threeItems = document.querySelector('.message');
                    threeItems.classList.add('hide')
                    
                    const finish = document.querySelector('.finish-order');
                    finish.classList.remove('hide');
                }
            }
        }
    }



 //função para EXECUTAR o botão de fechar pedido - encaminhar para o whatsapp web
