var area=document.getElementById("area");
function square(){
    let a=Number(area.value);
    let res=a*a;
    result.textContent=`area of square is ${res}`
    document.getElementById("result").innerHTML="Square of " + a + " is " + res.toString();

}