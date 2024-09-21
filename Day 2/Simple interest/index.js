var btn =document.getElementById('btn');
btn.addEventListener('click',()=>{
    let amount=Number(document.getElementById('amount').value);
    let interest=Number(document.getElementById('interest').value);
    let year=Number(document.getElementById('time').value);
    let res= (amount*interest*year)/100;
    document.getElementById('result').innerHTML="simple interest ="+res.toString();    
    
});
// ()=> {} arrow function