'use strict'

function function1() {
    let szoveg = document.getElementById('bye').value;
    let n = document.getElementById('szam').value;
    let x = 0;
    for (let i = 0; i < szoveg.length; i++) {
        if (i + +n < szoveg.length) {            
            document.getElementById('asd').innerHTML += szoveg[i + +n];
        }
        else {
            document.getElementById('asd').innerHTML += szoveg[x];
            x++;
        }
    }
}