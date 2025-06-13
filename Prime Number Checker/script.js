document.addEventListener( "DOMContentLoaded",function(){
    const numInput = document.getElementById("numberInput");
    const checkButton = document.getElementById("btn");
    const result= document.getElementById("result");

    checkButton.addEventListener("click",function(){
        const num = parseInt(numInput.value);
        if (isNaN(num) ){
            result.textContent = "Please enter a valid number.";
            result.style.color = "red"; 
            return;
        } 
        if(isPrime(num)){
            result.textContent = `${num} is a Prime Number.`;
            result.style.color = "green"; 
            return;
        }
        else{
            result.textContent = `${num} is NOT a Prime Number.`;
            result.style.color = "red"; 
            return;
        }       
    });
    function isPrime(num) {
        if(num<=1) return false;
        if(num <=3) return true;
        if(num % 2 === 0 || num % 3 === 0) return false;
        return true;
    }
});