const switchbtn=document.querySelector('.switch');
const body=document.body;

switchbtn.addEventListener('click',()=>{
    body.classList.toggle('on');
} );