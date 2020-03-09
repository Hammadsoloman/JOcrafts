var cart = [];

//Callbacks/////////////////////////////////////////////////////////////////////////////////////////////////////////////
getitem()
var listProCart = document.getElementById('list')
var ulel=document.createElement('ul')
listProCart.appendChild(ulel)
render()

//events/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
listProCart.addEventListener('click',function(){
    for(var i=0;i<cart.length;i++){
        if (event.target.id == cart[i].name){
            cart.splice(i,1)
            ulel.removeChild(ulel.childNodes[i]);
        }
        setItem()
    }
})


//functions////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function render()
{
    for (let i  = 0; i < cart.length; i++) {  
    var liel = document.createElement('li')
    ulel.appendChild(liel)
    var divel = document.createElement('div')
    liel.appendChild(divel)
    var imgel =document.createElement('img')
    divel.appendChild(imgel)
    imgel.setAttribute('src',cart[i].url)
    imgel.setAttribute('alt',cart[i].name)
    var h3el =document.createElement('h3')
    divel.appendChild(h3el)
    h3el.textContent=cart[i].name
    var pel =document.createElement('p')
    divel.appendChild(pel)
    pel.textContent=cart[i].price
    var remel = document.createElement('button');
    remel.setAttribute('id',cart[i].name);
    remel.textContent = "Delete"
    divel.appendChild(remel)
    }
}

//set into local storage
function setItem(){
    var cartproset=JSON.stringify(cart)
    localStorage.setItem('cart',cartproset)
}

//get from local storage
function getitem(){
    var cartproget=localStorage.getItem('cart')
    if (JSON.parse(cartproget)!=null){
      cart= JSON.parse(cartproget)
    }
}