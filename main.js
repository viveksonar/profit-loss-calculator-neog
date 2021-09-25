var initialPrice=document.getElementById("initial-price");
var qty=document.getElementById("quantity");
var currentPrice=document.getElementById("current-price");

var submitBtn=document.getElementById("submit");
var output=document.querySelector(".output");

submitBtn.addEventListener("click",clickHandler);

function clickHandler(){
    var price=Number(initialPrice.value);
    var quantity=Number(qty.value);
    var current=Number(currentPrice.value);

    if(current>price){
        var profit=(((current*quantity)-(price*quantity))*100)/(price*quantity);
        var p=(current*quantity)-(price*quantity);
        var message="Yay! You made a profit of "+p+" i.e. "+profit+"%";
        output.style.display="block";
        output.style.color="green";
        output.style.background="rgba(132, 190, 230, 0.6)";
        output.innerText=message;
    }
    else if(current<price){
        var loss=(((price*quantity)-(current*quantity))*100)/(price*quantity);
        var l=(price*quantity)-(current*quantity);
        var message="Oops! You had a loss of "+l+ " i.e. "+loss+"%";
        output.style.display="block";
        output.style.color="red";
        output.style.background="rgba(132, 190, 230, 0.6)";
        output.innerText=message;

    }
    else{
        output.style.display="block";
        output.style.color="white";
        output.style.background="rgba(132, 190, 230, 0.6)";
        output.innerText="No Loss! No Profit! "

    }
}