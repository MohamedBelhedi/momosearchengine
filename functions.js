const color=document.getElementById("color")
const body=document.querySelector("body")
const ColorText=document.querySelector(".textColor")


const copy=document.querySelector(".copy")

function colorChange(){

    body.style.background=color.value;

    ColorText.textContent=color.value

}


color.addEventListener("input",colorChange)
copy.addEventListener("click",()=>{navigator.clipboard.writeText(color.value)})

