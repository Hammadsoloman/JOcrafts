'use strict';
//global variables :
var payFrom = document.getElementById('payForm'); //variable to trget the form from html
var paymentArray = [];
//C.F :
function Payment(customerID, phoneNum, location, cardNum, expDate, cvCode, couponCode){
  this.customerID = customerID;
  this.phoneNum = phoneNum;
  this.location = location;
  this.cardNum = cardNum;
  this.expDate = expDate;
  this.cvCode = cvCode;
  this.couponCode = couponCode;
  setItem();
  paymentArray.push(this);
}

//event handler function to handle submit :
function handleSubmit(event){
  event.preventDefault();
    console.log(paymentArray);
  //to get the values from the form
  var customerID = event.target.customerID.value;
  var phoneNum = event.target.phoneNum.value;
  var location = event.target.location.value;
  var cardNum = event.target.cardNum.value;
  var expDate = event.target.expDate.value;
  var cvCode = event.target.cvCode.value;
  var couponCode = event.target.couponCode.value;

  //creating the objects
  new Payment(customerID, phoneNum, location, cardNum, expDate, cvCode, couponCode);
  //to update the previous payment info with the new payment info
  payFrom.reset();
}

//update paymentArray
function setItem(){
  var payment = JSON.stringify(paymentArray);
  localStorage.setItem('customer payment information', payment);
}

//to get payment info
function getItem(){
  var customerPaymentInformation = localStorage.getItem('customer payment information');
  paymentArray = JSON.parse(customerPaymentInformation);
}

//add eventListener to the submit button :
payFrom.addEventListener('submit', handleSubmit);
getItem();
