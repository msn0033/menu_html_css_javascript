var btnClose=document.querySelector('#btnClose');
var overlay=document.querySelector('.overlay');
var btn_menu =document.querySelector('.btn-menu');
btnClose.onclick=(ele)=>{
    ele.preventDefault();
    overlay.style.width=0;
};

btn_menu.addEventListener("click",()=>{
    overlay.style.width="100%";
});

