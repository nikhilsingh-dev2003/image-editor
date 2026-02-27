let total=0;
let count=0;
function addTocart(price){
    total+=price;
    count++;
    document.getElementById("total-price").innerText=total;
    document.getElementById("cart-count").innerText=count;
}

