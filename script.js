
//num of sides
const numside = document.querySelector('#num');
const btn = document.querySelector('#squareSide');
const box = document.querySelector('#box');

function generateGrid() {
    let num = Number(numside['value']);
    while(box.firstChild) {
        box.removeChild(box.firstChild);
    }

    for (let i = 0; i < num; i++) {

        const newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'grid-square');
        newDiv.setAttribute('style', 'outline: 1px solid; background-color: white; display: flex; flex-direction: row;');
        newDiv.setAttribute('id', `row-${i}`);
        box.appendChild(newDiv);

     
        
    }

   /* for (let j = 0; j < num; j++) {
        const rowcell = document.querySelector(`#row-${j}`);
        const col = document.createElement('div');
        col.setAttribute('class', 'grid-square');
        col.setAttribute('style', 'outline: 1px solid; background-color: white; ');
        rowcell.appendChild(col);
    }*/
}




//shows value of input in console
function displayValue(value) {
    return console.log(value['value']);
}


btn.addEventListener('click', () => generateGrid());

console.log(numside.value);