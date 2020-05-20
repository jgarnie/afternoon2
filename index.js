

'use strict'
class bus{
  constructor(direction,station, seats, passengers) {
    this.direction = direction;
    this.station = station;
    this.seats = seats;
    this.passengers = passengers;
    this.last_station =  this.station.lenght-1;
  }
  
  current = () =>{
    return `${this.station[i]}`;
  }
  next = () =>{
    let i = 0;
    return `${this.station[i+1]}`;
  }
  board = (count) =>{
    if(this.passengers+count <= this.seats){
      return `${this.passengers + count}`;
    }
  }
}



const  buses = [
  new bus('Prague', ['praha', 'jhilava','brno','breclav','viden'], 50, 40),

];
















/*class item {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
  //this is the function i am trying to activate
  sell = () => {
    if (this.quantity > 0) {
      this.quantity--;
    }
    return `${this.name} ${this.price} ${this.quantity-1}`; //actually now you dont need this
  };

  store = (count) => {
    return `${this.name} ${this.price} ${this.quantity+count}`;
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



  const list = document.querySelector('.elements-body');
  list.innerHTML = '';

  for (let i = 0; i < items.length; i++) {
    const newLi = document.createElement('tr');
    newLi.innerHTML += `<td>${items[i].name}</td><td>${items[i].price}</td><td>${items[i].quantity}</td><button class="buyer">Buy</button>`;
    list.appendChild(newLi);
    let btnBuy = newLi.querySelector('.buyer');
    //this is the listener that should activate sell(),
    btnBuy.addEventListener('click', (e) => {
      e.preventDefault();
      items[i].sell();
      console.log(items[i])
    });
  }







/*
  class item {
    constructor(name, price, quantity) {
      this.name = name;
      this.price = price;
      this.quantity = quantity;
    }
    //this is the function i am trying to activate
    sell = () => {
      if (this.quantity > 0) {
        this.quantity--;
      }
      return `${this.name} ${this.price} ${this.quantity-1}`; //actually now you dont need this
    };

    store = (count) => {
      return `${this.name} ${this.price} ${this.quantity+count}`;
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

  const renderItems = (items) => {

    const list = document.querySelector('.elements-body');
    list.innerHTML = '';

    for (let i = 0; i < items.length; i++) {
      const newLi = document.createElement('tr');
      newLi.innerHTML += `<td>${items[i].name}</td><td>${items[i].price}</td><td>${items[i].quantity}</td><button class="buyer">Buy</button>`;
      list.appendChild(newLi);
      let btnBuy = newLi.querySelector('.buyer');
      //this is the listener that should activate sell(),
      btnBuy.addEventListener('click', (e) => {
        e.preventDefault();
        items[i].sell();
        renderItems(items);
      });
    }
  };

  renderItems(items);




/*
/*
class item{

    constructor(name, price, quantity)
    {

        this.name = name;
        this.price = price;
        this.quantity = quantity;

    }

    sell(e){
        e.preventDefault;
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
    

    btnBuy.addEventListener('click', sell);
   

}*/
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