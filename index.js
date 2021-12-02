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
        const r = e.target.getBoundingClientRect();
        scaleX = canvas.width / r.width;
        scaleY = canvas.height / r.height;
        let mouse = {
            x: (e.clientX - r.left) * scaleX,
            y: (e.clientY - r.top) * scaleY
          }
        ctx.fillStyle = myColor;
        ctx.fillRect(mouse.x, mouse.y, 5, 10);
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




