var cart = [];

//Callbacks/////////////////////////////////////////////////////////////////////////////////////////////////////////////
getitem()
var articlEl = document.querySelector('.cart');
var ulel=document.createElement('ul')
articlEl.appendChild(ulel)
var total = 0;

renderlist();

//events/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
articlEl.addEventListener('click',function(event){
    event.preventDefault();
    for(var i=0;i<cart.length;i++){
        if(cart[i].name == event.target.id){
            total -= cart[i].price;
            var totalP = document.getElementById('total')
            totalP.innerHTML  = `Total Price: ${total}`
            if(cart[i].click > 1){

                cart[i].click -- ;
                var pQty = document.getElementById(`${cart[i].name} Qty`)
                pQty.innerHTML  = `Qty: ${cart[i].click}` 

                var pTotal = document.getElementById(`${cart[i].name} TotalPrice`)
                pTotal.innerHTML  = `Total Price: ${cart[i].click * cart[i].price}`
            }
            else
            {
                cart.splice(i,1);
                ulel.removeChild(ulel.childNodes[i]);
            }
        }
    }
    setToCart()
    setTotal()
})


//functions////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function renderlist(){
    for (var i = 0; i < cart.length; i++) {
        var liel = document.createElement('li')
        ulel.appendChild(liel)
        var divEl = document.createElement('div');
        liel.appendChild(divEl); 
        divEl.setAttribute('class', 'img-container');  
        var ImageEl = document.createElement('img'); 
        divEl.appendChild(ImageEl);       
        ImageEl.setAttribute('src', cart[i].url);
        ImageEl.setAttribute('alt', cart[i].name);  
        ImageEl.setAttribute('class', 'product-img');  
        var buttonEl = document.createElement('button'); 
        buttonEl.setAttribute('class', 'bag-btn'); 
        buttonEl.setAttribute('data-id', '1'); 
        buttonEl.setAttribute('id',cart[i].name);  
        divEl.appendChild(buttonEl);       
        var pEl=document.createElement('p');
        buttonEl.appendChild(pEl);
        pEl.setAttribute("id",cart[i].name)
        pEl.textContent= "Delete"
        var pElCount=document.createElement('p');
        divEl.appendChild(pElCount);
        pElCount.innerHTML = `Qty: ${cart[i].click}`
        pElCount.setAttribute('id' , `${cart[i].name} Qty`)
        var pElPrice=document.createElement('p');
        divEl.appendChild(pElPrice);
        pElPrice.innerHTML = `Price: ${cart[i].price}`
        var pElTotalPrice=document.createElement('p');
        divEl.appendChild(pElTotalPrice);
        pElTotalPrice.innerHTML = `Total Price: ${(cart[i].price * cart[i].click)}`
        pElTotalPrice.setAttribute("id",`${cart[i].name} TotalPrice`)
        total =total+(cart[i].price * cart[i].click)  
        setTotal()
      }
      var pElAllPrice=document.createElement('p');
      articlEl.appendChild(pElAllPrice);
      pElAllPrice.innerHTML = `Total Price: ${(total)}`
      pElAllPrice.setAttribute("id",`total`)
    }


//set into local storage
function setToCart(){
    var cartproset=JSON.stringify(cart)
    localStorage.setItem('cart',cartproset)
}
function setTotal(){
    var totalprices=total
    localStorage.setItem('total',totalprices)
}

//get from local storage
function getitem(){
    var cartproget = localStorage.getItem('cart')
    if (JSON.parse(cartproget)!= null){
      cart= JSON.parse(cartproget)
    }
}