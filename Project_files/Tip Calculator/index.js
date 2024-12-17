let amount=document.querySelector('#amount');
let tip=document.querySelector('#tip');
let btn=document.querySelector('#calculateBtn');
let msg =document.querySelector('#msg');

let total ;
btn.addEventListener('click',()=>{

    if (!amount.value || !tip.value) {
        msg.innerText = "Total: $ " + "0.00";
        return;
    }
   
    total = parseInt(amount.value) + (parseInt(amount.value) * parseInt(tip.value)) / 100;
    // console.log(total);
    msg.innerText = "Total: $ " + total.toFixed(2);
});