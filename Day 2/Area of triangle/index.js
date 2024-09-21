

function triangle(){
   
    let base=Number(document.getElementById('base').value);
    let hight=Number(document.getElementById('height').value);
    let res=1/2*(base*hight);
    document.getElementById('result').innerHTML=res.toString()

    
}