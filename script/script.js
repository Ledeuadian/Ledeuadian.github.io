window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');
    
    for(var i = 0; i < reveals.length; i++){
        
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint =10;
    
        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
      }
    }


// Saving to local storage

let cartFromLocalStorage = JSON.parse(localStorage.getItem('Order'));

function addToCart(e){ 
id = e.id;
items = document.getElementById(id+'Item').querySelectorAll('h3,img,span');
itemsName = document.getElementById(id+'Name').innerHTML;
itemImage = items[0].getAttribute("src");
itemPrice = items[3].innerText; 
Order = {name: itemsName, image: itemImage, price: itemPrice};

//
var counters=0;
var pullName ="";
  for(var key in localStorage){
    if(key.includes("Order") == true){
      counters+=1;
    }
  }


 
for (let i = 0; i < counters; i++) {
   let OrderNum = `Order`+i;
   let orderGet = localStorage.getItem(OrderNum);
   pullName = JSON.parse(orderGet).name;
  
}

if(itemsName === pullName ){
 alert('Item already in cart');
}else
{
//

for (let i = 0; i <= localStorage.length; i++) {
    number = i;
}
    localStorage.setItem("Order"+number, JSON.stringify(Order));
    alert('Item Successfuly Added To Cart');
}

//Cart Counter

let count = localStorage.length - 1;

const counter = document.getElementById('counter');
document.getElementById(id);
  const cl = counter.classList;
  const c = 'animated-counter';
  count++;

  counter.innerText = count;
  cl.remove(c, cl.contains(c));
  setTimeout(() =>
  counter.classList.add('animated-counter')
  ,1)
};

//Display to cart

const cartContent = document.querySelector("#cart-content");
let total = 0;

function displayToCart(){ 
  cartItems = '';
  var counters=0;

  for(var key in localStorage){
    if(key.includes("Order") == true){
      counters+=1;
    }
  }


 
for (let i = 0; i < counters; i++) {
   let OrderNum = `Order`+i;
   let orderGet = localStorage.getItem(OrderNum);
   let pullName = JSON.parse(orderGet).name;
   let pullImage = JSON.parse(orderGet).image;
   let pullPrice = JSON.parse(orderGet).price;
   let pullPriceNum = parseFloat(pullPrice,2);
  
  
   total += pullPriceNum;

   cartItems +=
`
  <tr id="Order${i}Delete">
  <td>
    <img src="${pullImage}" alt="${pullName}" width="120" style="width:6rem; border:1px solid black; border-radius:30px">
  </td>
  <td>
    ${pullName}
  </td>
  <td>₱<span id="item${i}Price">${pullPrice}</span></td>
  <td><input type="number" style="width:40px;" value="1" id="item${i}" onchange="updatePrice(this), updateTotal()"></td>
  <td><button type="button" class="bg-danger" style="width:30px;" id="Order${i}" onclick="deleteItems(this),updateTotal()"> X </button></td>
  </tr>
`;


}
cartContent.querySelector("tbody").innerHTML = cartItems + 
`<tr class="text-center"><td colspan="5"><h3>Total: ₱<span id="itemTotal">${total}</span></h3></td></tr>` +
`<button type="button" class="btn btn-danger container-fluid align-self-center">Checkout</button>` ;


};

function updatePrice(e){
id=e.id;

const basesPrice = 100;
let basePrice = parseInt(document.getElementById(id+`Price`).innerText);
let quantity = parseInt(document.getElementById(id).value);
let newPrice = basesPrice*quantity;
document.getElementById(id+`Price`).innerHTML = newPrice;
}


function deleteItems(e){
  id=e.id;
  document.getElementById(id+`Delete`).remove();
  localStorage.removeItem(id);
} 

function updateTotal(){
  let newTotal=0;
  const cartContent = document.querySelector("#cart-content");
  for (let i = 0; i < localStorage.length; i++) {
    id = `item`+i+`Price`;
    let pullPriceNum = parseFloat(document.getElementById(id).innerHTML);
  
    newTotal += pullPriceNum;
   
  } 
  document.getElementById(`itemTotal`).innerText = newTotal;
;
}

var slide= document.getElementById("slide");
var upArrow= document.getElementById("upArrow");
var downArrow= document.getElementById("downArrow");

let x= 0;

upArrow.onclick = function(){
  if(x > "-900"){
    x = x - 300;
  slide.style.top = x + "px";
  }
  
}
downArrow.onclick = function(){
  if(x < 0){
    x = x + 300;
  slide.style.top = x + "px";
  }
  
}