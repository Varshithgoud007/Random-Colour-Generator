let btn = document.querySelector("button")
btn.addEventListener("click",function(){
let randcolor = getrandcolor()
let h1 = document.querySelector("h1")

let div = document.querySelector("div")
div.style.backgroundColor = randcolor

})




function getrandcolor(){
    let red = Math.floor(Math.random()*255)
     let green= Math.floor(Math.random()*255)
     let blue = Math.floor(Math.random()*255)
     let color = `RGB(${red},${green},${blue})`
     return color
}
