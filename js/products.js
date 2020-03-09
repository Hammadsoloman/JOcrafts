'use strict';

var products = ['craft1.jpg','craft2.jpg','craft3.jpg','craft4.jpg','hand3.jpg'];
var prices = [1,2,3,4,5];
var productObj =[];

var productImage1 = document.querySelector('#img1');
var productImage2 = document.querySelector('#img2');
var productImage3 = document.querySelector('#img3');
var productImage4 = document.querySelector('#img4');
var productImage5 = document.querySelector('#img5');


function Product (name,price) {
  this.name= name.split(".")[0];
  this.url= `../images/${name}`;
  this.price=price;
  productObj.push(this);
}

for (var i=0 ; i <products.length ; i++){
  new Product(products[i],prices[i]);
}
console.log(productObj);

// for (var i=0 ; i <productObj.length ; i++){}
// var productImage1;
productImage1.setAttribute('src', productObj[1].url);
productImage1.setAttribute('alt', productObj[1].name);  

productImage2.setAttribute('src', productObj[2].url);
productImage2.setAttribute('alt', productObj[2].name);

productImage3.setAttribute('src', productObj[3].url);
productImage3.setAttribute('alt', productObj[3].name);

productImage4.setAttribute('src', productObj[4].url);
productImage4.setAttribute('alt', productObj[4].name);

productImage5.setAttribute('src', productObj[5].url);
productImage5.setAttribute('alt', productObj[5].name);
