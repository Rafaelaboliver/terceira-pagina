//para mostrar qual prato foi selecionado

let mainFinal;
let nameFood;
let priceFood;
let foodConvert1;
let foodConvert2;
let finalPriceFood;

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
    console.log(mainFinal);

    nameFood = document.querySelector( '.main-option .border-check .item-name' ).innerHTML;
    console.log(nameFood);

    priceFood = document.querySelector( '.main-option .border-check .item-price' ).innerHTML;
    console.log(priceFood);

    //modificando os caracteres esspeciais para ter o valor em number
    foodConvert1 = priceFood.replace('R$', '0');
    foodConvert2 = foodConvert1.replace (',','.');
    console.log(foodConvert2);

    finalPriceFood = Number(foodConvert2);
    console.log(finalPriceFood);

}


let drinkFinal;
let nameDrink;
let priceDrink;
let drinkConvert1;
let drinkConvert2;
let finalPriceDrink;

function choiceDrink (drink){
    
    const drinkSelection = document.querySelector('.drink-option .border-check');

    if (drinkSelection !== null){
        drinkSelection.classList.remove('border-check');
    }
 
    drink.classList.add('border-check');

    drinkFinal = drink.innerHTML;
    allDone ();
    console.log(drinkFinal);

    nameDrink = document.querySelector( '.drink-option .border-check .item-name' ).innerHTML;
    console.log(nameDrink);

    priceDrink = document.querySelector( '.drink-option .border-check .item-price' ).innerHTML;
    console.log(priceDrink);

    //modificando os caracteres esspeciais para ter o valor em number
    drinkConvert1 = priceDrink.replace('R$', '0');
    drinkConvert2 = drinkConvert1.replace (',','.');
    console.log(drinkConvert2);

    finalPriceDrink = Number(drinkConvert2);
    console.log(finalPriceDrink);

}


let dessertFinal;
let nameDessert;
let priceDessert;
let priceConvert1;
let priceConvert2;
let finalPriceDessert;



function choiceDessert (dessert){
    const dessertSelection = document.querySelector('.dessert-option .border-check');

    if (dessertSelection !== null) {
        dessertSelection.classList.remove('border-check');
    }
   
    dessert.classList.add('border-check');

    dessertFinal = dessert.innerHTML;
    allDone ();
    console.log(dessertFinal);

    nameDessert = document.querySelector( '.dessert-option .border-check .item-name' ).innerHTML;
    console.log(nameDessert);

    priceDessert = document.querySelector( '.dessert-option .border-check .item-price' ).innerHTML;
    console.log(priceDessert);

    //modificando os caracteres esspeciais para ter o valor em number
    dessertConvert1 = priceDessert.replace('R$', '0');
    dessertConvert2 = dessertConvert1.replace (',','.');
    console.log(dessertConvert2);

    finalPriceDessert = Number(dessertConvert2);
    console.log(finalPriceDessert);

}


//liberar para APARECER o botão de fechar pedido:
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
   


//construíndo a função da mensagem para aparecer no whastapp:


let totalOrder;
let whatsappMessage;


function whastapp (){
    totalOrder = (finalPriceFood + finalPriceDrink + finalPriceDessert);
    console.log(totalOrder);
    let whatsappMessage = encodeURIComponent (
        `Olá, gostaria de fazer o pedido:
        - Prato: ${nameFood}
        - Bebida: ${nameDrink}
        - Sobremesa: ${nameDessert}
        Total: R$${totalOrder}`
        )

    window.open("https://wa.me/4407525045936?text=" + whatsappMessage);
}
