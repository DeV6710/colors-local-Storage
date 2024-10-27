console.log("Connected");


let a = document.querySelectorAll("ul li")
let display = document.getElementById("display")
let text = document.getElementById("color")



if(localStorage.getItem("color")){
    display.style.background = localStorage.getItem("color");

}

console.log(a)
a.forEach((ee) =>{
    ee.addEventListener("click",function(e){
       console.log(e.currentTarget.dataset.color)

       localStorage.setItem("color",e.currentTarget.dataset.color);

       display.style.background = localStorage.getItem("color");

       text.innerText = localStorage.getItem("color")
    })
})      