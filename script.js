
//num of sides
const numside = document.querySelector('#num');
const btn = document.querySelector('#squareSide');
const clear = document.querySelector('#clear');
const box = document.querySelector('#box');
const max = numside.getAttribute('max');

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function generateGrid() {
    const six = 16;

    while(box.firstChild) {
        box.removeChild(box.firstChild);
    }

    for (let i = 0; i < six; i++) {

        const newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'grid-square');
        //newDiv.setAttribute('class', 'grid-square:hover');
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
function addColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    else {e.target.style.backgroundColor = 'black';}
   
}

function removeColor(e) {
    e.target.style.backgroundColor = 'white';
   
}

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

function refresh() {
    
    let white = document.getElementsByClassName('grid-square');
    for (let j = 0; j < white.length; j++) {
        white[j].style.backgroundColor = 'white';
        //test[j].addEventListener('mouseenter', addColor);
    }
    
   
}


generateGrid();
btn.addEventListener('click', () => customGrid());
draw();
clear.addEventListener('click', () => refresh());



