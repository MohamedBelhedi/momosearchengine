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




color.addEventListener("input",()=>{
    body.style.background=color.value /*damit die Farbe Live gewechselt werden kann*/
    localStorage.setItem('storedValue',color.value);


})
if(localStorage.storedValue) {


    
       
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
       ErrorPage();
        window.open("https://www.google.de/search?q="+`${Input}`)

})
   
   

searchEn2.addEventListener("click",()=>{
        const Input=input.value
        console.log("hi")
        ErrorPage();
        window.open("https://www.bing.com/search?q="+`${Input}`)
    

})

searchE3.addEventListener("click",()=>{
        const Input=input.value
        console.log("hi")
        ErrorPage();
        window.open("https://de.search.yahoo.com/search?p="+`${Input}`)
    

})

function ErrorPage(){
    const input1=document.querySelector("#search").value
    const badWordArry=["hurensohn",
    "scheiße",
    "scheiss",
    "scheisse",
    "arschloch",
    "Arschloch",
    "kinderporno",
    "Kinderporno",
    "kinderpornos",
    "Kinderpornos",
    "Kindersex",
    "kindersex",
    "kindersexpuppen",
    "kindersexpuppen",
    "sex",
    "Hurensohn",
    "Scheiße",
    "Sex",
    "Scheiss" , 
    "Scheisse",
    "Kinderpornos",
    "Kinderporno",
    "wixxer",
    "Wixxer",
    "Blowjob",
    "blowjob",
    "Milf",
    "milf",
    "gayporno",
    "gayporn",
    "Gayporn",
    "Gayporno",
    "lesbianporn",
    "Lesbianporn",
    "Porno",
    "porno",
    "porn",
    "Porn",
    "xhamster",
    "Xhamster",
    "youporn",
    "Youporn",
    "xnxx",
    "Xnxx",

]

  
    badWordArry.forEach((badWordArry)=>{
      

        if(input1.includes(badWordArry))
        {
   
          
           Swal.fire({
                title: 'Na Na schlimme worte suchen wir nicht 🤬',
               
                showCancelButton: false,
                confirmButtonText: 'Ok',
                denyButtonText: `abbrechen`,
              }).then((result) => {
                
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                   
                   Swal.fire('Wir bitten um Verständnis 😊', '', 'success')
                   
                    
                  
                   
            }
          
              })
              .then(location.open(false))
              
           
            
    
        }
       

  
    })
    
    
   






}




Zeit();



        
     
    
    
 
    


