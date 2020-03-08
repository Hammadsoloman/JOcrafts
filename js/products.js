'use strict';

//GLOBAL VARIABLES
var products = ['Baby blanket.jpg',
                'Baby cardigan with bear hat.jpg',
                'Baby cocoon.jpg',
                'baby shower sevonier 2.jpg',
                'baby shower sevonier.jpg',
                'Blue Pottery Tea Sets.jpg',
                'Candle holder.jpg',
                'Cat sweater.jpg',
                'Coasters_Adorned.jpg',
                'colorful rugs.jpg',
                'cozy throw.jpg',
                'earing  jewelery.jpg',
                'embroidered collar+bracelet.jpg',
                'hand made scarf.jpg',
                'hand-made doll.jpg',
                'hand-made rubbit.jpg',
                'heart-shaped embroidery.jpg',
                'Lacquer art Jewelry Box.jpg',
                'leather wallet 1.jpg',
                'leather wallet 2.jpg',
                'MAP T-SHIRT WHITE.jpg',
                'pillow.jpg',
                'Public Garden jewelery.jpg',
                'Silver Embossed tray.jpg',
                'square basket.jpg',
                'turtle holder.jpg',
                'Two button Clutch.jpg',
                'Unique cushion.jpg',
                'valentine’s disc.jpg',
                'JORDANIAN KHANJAR.jpg',
                'embroidered jaket.jpg'];

var prices = [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10];
var productObj =[];//to store the new objects
var ulE1 = document.getElementById('img-container');

//CONS. FUNC. FOR PRODUCTS
function Product (name,price) {
    this.name= name.split(".")[0];
    this.url= `../images/${name}`;
    this.price=price;
    productObj.push(this);
    this.clicks=0;
    
  };

for (var i=0 ; i <products.length ; i++){
    new Product(products[i],prices[i]);
}

//SET FUNC.
function setItem(){
    var order = JSON.stringify(productObj);
    localStorage.setItem('imageOrder', order);
  }

//GET FUNC.
  function getItem(){
        var imageOrder = localStorage.getItem('imageOrder');
        if(imageOrder){
            productObj = JSON.parse(imageOrder);
        }
      }
  

//FUNCTION TO RENDER THE PRODUCTS
function renderList(){
    
    for (var i =0; i < productObj.length ; i++) {
      var liE1 = document.createElement('li');
      ulE1.appendChild(liE1); 
      var imgEl = document.createElement('img');
      imgEl.setAttribute('src', productObj[i].url);
      imgEl.setAttribute('alt', productObj[i].name);
      imgEl.setAttribute('id', productObj[i].name);
      liE1.appendChild(imgEl); 
    }
  }
  renderList();
//EVENT LISTENER FOR SELECTING PRODUCTS
ulE1.addEventListener('click', clickImage);

//EVENT LISTENER FUNCTION 1
function clickImage(e){
    for (var i = 0; i < productObj.length ; i++) {  
        if (e.target.id === productObj[i].name) {
            productObj[i].clicks++; 
        }
        
        console.log(productObj[i].name,productObj[i].clicks);
}
setItem();
}

//EVENT LISTENER FOR CART
