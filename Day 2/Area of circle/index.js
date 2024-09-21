document.getElementById('btn').addEventListener('click',()=>{
    document.getElementById('result').textContent = `${Math.floor((Number(document.getElementById('radius').value)**2)*3.14)}`;
});