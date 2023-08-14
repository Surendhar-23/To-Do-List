let input=document.querySelector(".input input");
let btn=document.querySelector(".addlist");
let list=document.querySelector(".list");
let listitem=document.querySelectorAll(".list li");
let listitemspan=document.querySelectorAll(".list li span");
let addelement=function(){
    if(input.value=='')
        alert("You must write something");
    else{
    let newelement=document.createElement('li');
    // let text1=document.createTextNode(input.value);
    // newelement.appendChild(text1);
    newelement.textContent=input.value;
    list.appendChild(newelement);
    let newelement1=document.createElement('span');
    newelement1.textContent="\u00d7";
    newelement.appendChild(newelement1);
    updatelist();}
}

btn.addEventListener('click',addelement);
document.addEventListener('keypress',(e)=>{
    if(e.key ==='Enter')
        addelement();
});

let updatelist = function(){
    listitem=document.querySelectorAll(".list li");
    listitemspan=document.querySelectorAll(".list li span");
    for(let i=0;i<listitem.length;i++){
        listitem[i].addEventListener('click',()=>{
        listitem[i].classList.toggle('checked');
    })
        listitemspan[i].addEventListener('click',()=>{
        listitem[i].remove();   
        })
}
}