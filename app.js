


let celebrities = [
    {
     name : "Abdul sattar eidh",
     founder: "Edhi foundaction",
     imagpath :"Abdul-Sattar-Edhi-2.jpg",
    qoute : "no religion is higher than humanity",
    }
    ,
    {
        name : "Imran Khan",
        founder: "PTI",
        imagpath :"Imran-Khan.jpg",
       qoute : "Do NI IK Pakistan"
       }
       ,
       
    {
        name : "Nawaz sharif",
        founder: "PTI",
        imagpath :"nawaz-sharif-2-1024.jpg",
       qoute : "mujhe kyun nikala"
       }
       ,
{
       name : "Zardari",
        founder: "PTI",
        imagpath :"zardari-1024.jpg",
       qoute : "ek zardari sab pe bhari"
       }
       ,
   
   

]
function init(){
    let bodyEi = document.querySelector("body");
    for (let i= 0; i<celebrities.length; i++){
        bodyEi.innerHTML +="<div class='celebriyt-img' style= 'background-image: url("+ celebrities[i].imagpath + ")'<p></p></div>"
    }
}

