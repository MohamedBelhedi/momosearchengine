const input=document.querySelector("#search")
const body=document.querySelector('body')

const btn=document.querySelector('.los')
const select=document.querySelector('#select')
const color=document.querySelector('#color')
const datumzeit=document.querySelector(".datumzeit")

const date=new Date()

datumzeit.innerText=date

// const color1=color.value



// const searchEnval=searchEn.value
// const inputVal1='google'

color.addEventListener("input",()=>{
    body.style.background=color.value

})


const searchEn1=document.querySelector('.option1')
const searchEn2=document.querySelector('.option2')
const searchE3=document.querySelector('.option3')

    
    if(searchEn1.value==='google'){
    searchEn1.addEventListener("click",()=>{
        const Input=input.value
        console.log("hi")
        
        window.open("https://www.google.de/search?q="+`${Input}`)
    
input.value=''
location.reload();
})
    }
   

searchEn2.addEventListener("click",()=>{
        const Input=input.value
        console.log("hi")
        
        window.open("https://www.bing.com/search?q="+`${Input}`)
    
input.value=''
location.reload();
})

searchE3.addEventListener("click",()=>{
        const Input=input.value
        console.log("hi")
        
        window.open("https://de.search.yahoo.com/search?p"+`${Input}`)
    
input.value=''
location.reload();
})








        
     
    
    
 
    


