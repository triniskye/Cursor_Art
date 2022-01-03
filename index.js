//instructions
addEventListener("DOMContentLoaded", ()=>{
    alert("To draw, click on the canvas and move mouse. To stop drawing, click again.")
})

//canvas
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
let myColor = "red"
const red = document.getElementById('red')
const orange = document.getElementById('orange')
const yellow = document.getElementById('yellow')
const green = document.getElementById('greenyellow')
const blue = document.getElementById('lightskyblue')
const purple = document.getElementById('mediumpurple')
const pink = document.getElementById('pink')
const allColours = [red, orange, yellow, green, blue, purple, pink]
let draw = false;


canvas.addEventListener('click', ()=>{
    draw === false ? draw = true : draw = false
})
canvas.addEventListener('mousemove', function(e){
    if(draw === true){
        eraser = false;
        const r = e.target.getBoundingClientRect();
        scaleX = canvas.width / r.width;
        scaleY = canvas.height / r.height;
        let mouse = {
            x: (e.clientX - r.left) * scaleX,
            y: (e.clientY - r.top) * scaleY
          }
        ctx.fillStyle = myColor;
        ctx.fillRect(mouse.x, mouse.y, x, y);
    }
    else{
        draw = false
        
    }

  

})
//button
const button = document.getElementById('clear');
button.addEventListener('click', (e)=>{
    e.preventDefault()
    ctx.clearRect(0,0, canvas.width, canvas.height)
    e.target.blur()
})

//eraser
let eraser = false;
const eraserButton = document.querySelector(".eraser")
eraserButton.addEventListener('click', ()=>{
    if(eraser === false){
        eraser = true;
        draw = false;
        canvas.addEventListener('mousemove', function(e){
            if (eraser === true){
                const r = e.target.getBoundingClientRect();
                scaleX = canvas.width / r.width;
                scaleY = canvas.height / r.height;
                let mouse = {
                    x: (e.clientX - r.left) * scaleX,
                    y: (e.clientY - r.top) * scaleY
                  }
                ctx.clearRect(mouse.x, mouse.y, x, y);
            }
            else{
                eraser = false
            }
               
        })}
    else{
        eraser = false;
        
    }
})


//color selector

const colourSelector = document.querySelector('.colourSelector');
colourSelector.addEventListener('click', (e)=>{
    colourBrick = document.getElementById(`${e.target.id}`)
    myColor = colourBrick.id
    changeColour()
    
})

function changeColour(){
    allColours.forEach((element)=>{
        if(element.id === myColor){
            element.style.borderRadius = "100%";
            element.style.borderStyle = "solid";
            element.style.borderImage = "conic-gradient(from var(--angle), white, black, white) 1";
            element.style.animation = "5s rotate infinite"
        }
        else{
            element.style.borderRadius = "0%";
            element.style.borderStyle = "none";
            element.style.borderImage = "none";
            element.style.animation = "none"
        }
    })
}

//size selector
const xs = document.querySelector("#xs");
const s = document.querySelector("#s");
const m = document.querySelector("#m");
const l = document.querySelector("#l");
const xl = document.querySelector("#xl");
allSizes = [xs, s, m, l, xl]
let mySize = m
sizeChange(mySize)
function sizeChange(size){
    allSizes.forEach((element)=>{
        if (element === size){
            element.style.borderStyle = 'solid'
            element.style.borderImage = 'conic-gradient(from var(--angle), rgb(56, 197, 126), rgb(250, 248, 248), rgb(245, 87, 205), rgb(59, 88, 250)) 1'
            element.style.animation = '5s rotate linear infinite'
        }
        else{
            element.style.borderStyle = 'none'
            element.style.borderImage = 'none'
            element.style.animation = 'none'
        }
    })

}
let x = 5
let y = 10
const sizeSelector = document.querySelector(".sizeSelector")
sizeSelector.addEventListener('click', (e)=>{
    switch(e.target.id){
        case "xs":
            mySize = xs
            sizeChange(xs)
            x = 4
            y = 6
            break;
        case "s":
            mySize = s
            sizeChange(s)
            x = 6
            y = 8
            break;
        case "m":
            mySize = m
            sizeChange(m)
            x = 8
            y = 10
            break;
        case "l":
            mySize = l 
            sizeChange(l)
            x = 10
            y = 12   
            break;
        case "xl":
            mySize = xl
            sizeChange(xl)
            x = 12
            y = 14
            break;
    }
})

