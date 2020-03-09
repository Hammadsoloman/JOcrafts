'use strict';
//global variables :
var payFromOpen = document.getElementById('payForm'); //variable to trget the form from html
var paymentArray = [];
var totalInCart = 0;
getitem()

//C.F :
function Payment(customerID, phoneNum, location, paymetnOption, cardNum, expDate, cvCode, couponCode){
  this.customerID = customerID;
  this.cardNum = cardNum;
  this.phoneNum = phoneNum;
  this.location = location;
  this.paymetnOption = paymetnOption;
  this.cardNum = cardNum;
  this.expDate = expDate;
  this.cvCode = cvCode;
  this.couponCode = couponCode;
}

payFromOpen.addEventListener('submit' , function(event){
  event.preventDefault();
  var customerID = event.target.CustomerIDModal.value;
  var phoneNum = event.target.number.value;
  var location = event.target.location.value;
  var paymetnOption = event.target.payment.value;
  var cardNum = event.target.cardNumber.value;
  var expDate = event.target.cardExpiry.value;
  var cvCode = event.target.cardCVC.value;
  var couponCode = event.target.couponCode.value;
  var pay = new Payment(customerID, phoneNum, location, paymetnOption, cardNum, expDate, cvCode, couponCode);
  console.log(pay);
  paymentArray.push(pay);
  console.log(paymentArray);
  setItem();
  payFromOpen.reset();
});

var price = document.getElementById('totalprice');
price.innerHTML=`Total Price: ${totalInCart}`;

//update paymentArray
function setItem(){
  var payment = JSON.stringify(paymentArray);
  localStorage.setItem('customer payment information', payment);
}

function getitem(){
  var total = localStorage.getItem('total')
  console.log(totalInCart, total)
  if (total!= null){
    totalInCart= (total)
  }
}