const input=document.querySelector("#search")
const body=document.querySelector('body')

const btn=document.querySelector('.los')
const select=document.querySelector('#select')
const color=document.querySelector('#color')
const datumzeit=document.querySelector(".datumzeit")

const Zeit=()=>{
    const date=new Date()

    datumzeit.innerText=date

    setInterval(Zeit, 1000)

}



// const color1=color.value



// const searchEnval=searchEn.value
// const inputVal1='google'

color.addEventListener("input",()=>{
    body.style.background=color.value /*damit die Farbe Live gewechselt werden kann*/
    localStorage.setItem('storedValue',color.value);


})
if(localStorage.storedValue) {


    
        // color.value = localStorage.storedValue;
        body.style.background=localStorage.storedValue;
        let speicher=localStorage.getItem(localStorage.storedValue)
        body.addEventListener("DomContentLoaded",()=>{

            body.style.background=speicher
        })
       

}






const searchEn1=document.querySelector('.option1')
const searchEn2=document.querySelector('.option2')
const searchE3=document.querySelector('.option3')

    
   
    searchEn1.addEventListener("click",()=>{
        const Input=input.value
        console.log("hi")
        
        window.open("https://www.google.de/search?q="+`${Input}`)
    
input.value=''
location.reload();
})
   
   

searchEn2.addEventListener("click",()=>{
        const Input=input.value
        console.log("hi")
        
        window.open("https://www.bing.com/search?q="+`${Input}`)
    
// input.value=''
// location.reload();
})

searchE3.addEventListener("click",()=>{
        const Input=input.value
        console.log("hi")
        
        window.open("https://de.search.yahoo.com/search?p="+`${Input}`)
    
// input.value=''
// location.reload();
})





Zeit();


        
     
    
    
 
    


