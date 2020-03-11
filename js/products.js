'use strict';

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
'JORDANIAN KHANJAR.jpg'
];
var prices = [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10];
console.log(prices.length, products.length)
var productObj =[];
var cart =[];
var articlEl = document.querySelector('.product');
getitem()

function Product (name,price) {
    this.name= name.split(".")[0];
    this.url= `../images/${name}`;
    this.price=price;
    this.click=0;
    productObj.push(this);
  };

for (var i=0 ; i <products.length ; i++){
    new Product(products[i],prices[i]);
}
console.log(productObj);

// for (var i=0 ; i <productObj.length ; i++){}
// var productImage1;
function renderlist(){
    for (var i = 0; i < productObj.length; i++) {
        var divEl = document.createElement('div');
        articlEl.appendChild(divEl); 
        divEl.setAttribute('class', 'img-container');  
        var ImageEl = document.createElement('img'); 
        divEl.appendChild(ImageEl);       
        ImageEl.setAttribute('src', productObj[i].url);
        ImageEl.setAttribute('alt', productObj[i].name);  
        ImageEl.setAttribute('id', `img${i}`);  
        ImageEl.setAttribute('class', 'product-img');  
        var buttonEl = document.createElement('button'); 
        buttonEl.setAttribute('class', 'bag-btn'); 
        buttonEl.setAttribute('data-id', '1');  
        buttonEl.setAttribute('id',String(i));  
        divEl.appendChild(buttonEl);
        var iEl=document.createElement('i');
        buttonEl.appendChild(iEl);
        iEl.setAttribute('class','fas fa-cart-plus');
        iEl.setAttribute("id",String(i))
        var pEl=document.createElement('p');
        buttonEl.appendChild(pEl);
        pEl.setAttribute("id",String(i))
        pEl.textContent= "ADD TO CART"
        var divElData = document.createElement('div');
        divEl.appendChild(divElData); 
        divElData.setAttribute('class', 'div-data'); 
        var pEl2=document.createElement('p');
        divElData.appendChild(pEl2);
        pEl2.setAttribute('class','prod-price')
        pEl2.textContent= `${productObj[i].price} JDs`
        var pEl3=document.createElement('p');
        divElData.appendChild(pEl3);
        pEl3.setAttribute('class','prod-name');
        pEl3.textContent= productObj[i].name;
        
}}

renderlist();
//To make event on click and set the opject of the the img on a new productObj
var numItem=document.querySelector('.cart-num')
var pel=document.createElement('p')
numItem.appendChild(pel);
pel.textContent=cart.length;
pel.setAttribute('class','cartCounter');

 var eventos= document.querySelector('.product')
 eventos.addEventListener('click',function(){
    if (Number(event.target.id) < productObj.length ){ 
        if(cart.includes(productObj[Number(event.target.id)]) === false) {
            cart.push(productObj[Number(event.target.id)])
        }
        console.log(Number(event.target.id))
        console.log(event.target)
        productObj[Number(event.target.id)].click++
        setItem()
        pel.textContent=cart.length
    }
 })
 
function setItem(){
    var cartproset=JSON.stringify(cart)
    localStorage.setItem('cart',cartproset)
}

function getitem(){
    var cartproget=localStorage.getItem('cart')
    if (JSON.parse(cartproget)!=null){
      cart= JSON.parse(cartproget)
    }
}