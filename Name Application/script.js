const btnElement=document.querySelector('button');
const spanElement=document.getElementById('update');

btnElement.onclick=function(){
    const yourName=prompt("Please Enter your name: ")
    spanElement.textContent=yourName;
}
