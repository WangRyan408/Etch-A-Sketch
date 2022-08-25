
//num of sides
const numside = document.querySelector('#num');
const btn = document.querySelector('#squareSide');
const black = document.querySelector('#black');
const rainbow = document.querySelector('#rainbow');
const clear = document.querySelector('#clear');
const box = document.querySelector('#box');
const max = numside.getAttribute('max');

var color = undefined;

//Stole this; detects if mouse is held down.
//Used to enforce drag painting
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)


//Generates default 16x16 grid
function generateGrid() {
    const six = 16;

    while(box.firstChild) {
        box.removeChild(box.firstChild);
    }

    for (let i = 0; i < six; i++) {

        const newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'grid-square');
        
        newDiv.setAttribute('style', `outline: 1px solid; background-color: white; display: grid; grid-template-columns: repeat(${six}, 1fr);`);
        newDiv.setAttribute('id', `row-${i}`);
        box.appendChild(newDiv);

    }

    for (let i = 0; i < six; i++) {
        const rowcell = document.querySelector(`#row-${i}`);
        for (let j = 0; j < six; j++) {
            const col = document.createElement('div');
            col.setAttribute('class', 'grid-square');
            col.setAttribute('style', 'outline: 1px solid; background-color: white; grid-column: auto;');
            col.setAttribute('id', `col-${j}`);
            rowcell.appendChild(col);
        }
    }

}

//Generates grid based on user inputted size
function customGrid() {
    let num = Number(numside['value']);
    if (num <= max) {
    while(box.firstChild) {
        box.removeChild(box.firstChild);
    }
    
        for (let i = 0; i < num; i++) {

            const newDiv = document.createElement('div');
            newDiv.setAttribute('class', 'grid-square');
            newDiv.setAttribute('style', `outline: 1px solid; background-color: white; display: grid; grid-template-columns: repeat(${num}, 1fr);`);
            newDiv.setAttribute('id', `row-${i}`);
            box.appendChild(newDiv);

        }

        for (let i = 0; i < num; i++) {
            const rowcell = document.querySelector(`#row-${i}`);
            for (let j = 0; j < num; j++) {
                const col = document.createElement('div');
                col.setAttribute('class', 'grid-square');
                col.setAttribute('style', 'outline: 1px solid; background-color: white; grid-column: auto;');
                col.setAttribute('id', `col-${j}`);
                rowcell.appendChild(col);
            }
        }

        draw();
    }
}

//Sets color based on button clicked
function changeColor() {
    black.addEventListener('click', function() {
        color = 'black';
    });

    rainbow.addEventListener('click', function() {
        color = 'rainbow'
    });
}


//Adds color to square
function addColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    
    else if (color == 'rainbow') {
        const randomR = Math.floor(Math.random() * 256)
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    }
    
    else {
        e.target.style.backgroundColor = 'black';
}
   
}

//Changes target square to white
function removeColor(e) {
    e.target.style.backgroundColor = 'white';
   
}

//Cycles through all the squares and adds color based on click or click n draG
function draw() {
    let num = Number(numside['value']) || 16;

    for (let i = 0; i < num; i++) {
        let test = document.getElementById(`row-${i}`).children;

        for (let j = 0; j < test.length; j++) {
            test[j].addEventListener('mouseover', addColor);
            test[j].addEventListener('mousedown', addColor);
            
        }
    }
}

//Executes removeColor(makes them turn white) on all squares (cycles through them)
function refresh() {
    
    let white = document.getElementsByClassName('grid-square');
    for (let j = 0; j < white.length; j++) {
        white[j].style.backgroundColor = 'white';
        
    }
    
   
}

//The function calls themselves
generateGrid();
changeColor();
btn.addEventListener('click', () => customGrid());
draw();
clear.addEventListener('click', () => refresh());



