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
    alert('Item Successfuly Added To Cart');


//Cart Counter

let count = localStorage.length - 1;
console.log(count);

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

   cartItems +=
`
  <tr>
  <td>
    <img src="${pullImage}" alt="${pullName}" width="120" style="width:6rem; border:1px solid black; border-radius:30px">
  </td>
  <td>
    ${pullName}
  </td>
  <td>₱${pullPrice}</td>
  <td><input type="number" style="width:40px;" value="1"></td>
  <td><button type="button" class="bg-danger" style="width:30px;"> X </button></td>
  </tr>
`;
}
cartContent.querySelector("tbody").innerHTML = cartItems;
};

