'use strict'

class item{

    constructor(name, price, quantity)
    {

        this.name = name;
        this.price = price;
        this.quantity = quantity;

    }

    sell(){
        
        return `${this.name} ${this.price} ${this.quantity-1}`
       
    }

    store(count){

        return `${this.name} ${this.price} ${this.quantity+count}`
    }

}




const items = [

    new item('soap', 11, 3),
    new item('bread', 12, 2),
    new item('apples', 13, 5),
    new item('banana', 15, 7),
    new item('grappe', 16, 5),
    new item('water', 9, 7),
    new item('beer', 4, 9),

];
for(let i=0; i<items.length; i++){

    const list = document.querySelector('.elements');

    const newLi = document.createElement('tr');
    newLi.innerHTML += `
    <td>${items[i].name}</td><td>${items[i].price}</td><td>${items[i].quantity}</td><button class="buyer">Buy</buy>`;
    list.appendChild(newLi);
    let btnBuy = newLi.querySelector('.buyer');
    

    btnBuy.addEventListener('click', item.sell);


}
/*items.forEach((item) => {
    const list = document.querySelector('.elements');

    const newLi = document.createElement('tr');
    newLi.innerHTML += `
    <td>${item.name}</td><td>${item.price}</td><td>${item.quantity}</td><button class="buyer">Buy</buy>`;
    list.appendChild(newLi);
    let btnBuy = newLi.querySelector('.buyer');
    btnBuy.addEventListener('click',this.sell);
});

*/