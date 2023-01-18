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
    localStorage.setItem("Order"+number, (Order));
};

function displayToCart(){
let orderGet = localStorage.getItem('Order1');
console.log(orderGet.Order);

};
