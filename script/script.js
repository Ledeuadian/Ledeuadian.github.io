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


for (let i = 0; i <= localStorage.length; i++) {
    number = i;
}
    localStorage.setItem("Order"+number, JSON.stringify(Order));
};


//Display to cart

const cartContent = document.querySelector("#cart-content");


function displayToCart(){ 

productMarkup = '';

for (let i = 1; i <= localStorage.length; i++) {
   OrderNum = 'Order'+i;
   let orderGet = localStorage.getItem('Order1');
   let pullName = JSON.parse(orderGet).name;
   let pullImage = JSON.parse(orderGet).image;
   let pullPrice = JSON.parse(orderGet).price;

   productMarkup +=
`
  <tr>
  <td>
    <img src="${pullImage}" alt="${pullName}" width="120" style="width:6rem; border:1px solid black; border-radius:30px">
  </td>
  <td>
    ${pullName}
  </td>
  <td>₱${pullPrice}</td>
  <td><input type="number" style="width:40px;"></td>
  <td><button type="button" class="bg-danger" style="width:30px;"> X </button></td>
  </tr>
`;
}
cartContent.querySelector("tbody").innerHTML = productMarkup;

};



