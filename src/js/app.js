const buttonResetNumber = document.querySelector('.resetNumber');
const buttonReset = document.querySelector('.reset');
const buttonBottom = document.querySelector('.bottom');
const buttonStart = document.querySelector('.start');

const listTop = document.querySelector('.topNumber').childNodes;
const listLeft = document.querySelector('.leftNumber').childNodes;
const listBottom = document.querySelector('.bottomNumber').childNodes;

const listTr = document.querySelectorAll('.line')

let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let listNumberTop = list.slice()
let listNumberLeft = list.slice()
let listNumberBottom = list.slice()

function arrangementOfNumbers (listNumber, listCells, index) {
    listCells[index].classList.add('filled')
    listCells[index].textContent = listNumber[0];
    listNumber.splice(0,1);
    setTimeout(() => {
        listCells[index].dataset.number = listCells[index].textContent;
        listCells[index].textContent = ""
        const imgEl = document.createElement('img');
        imgEl.src = 'src/img/gray_1.svg';
        listCells[index].appendChild(imgEl)
        imgEl.addEventListener('click', () => {
            const parent = imgEl.parentElement
            openNumber(parent)
            setTimeout(() => {
                parent.dataset.number = parent.textContent;
                parent.textContent = '';
                parent.appendChild(imgEl)
            }, 1000)
        })
    }, 1000)  
}

function openNumber (parent) {
        parent.removeChild(parent.childNodes[0])
        parent.textContent = parent.dataset.number
}

function gray (indexTr, indexChildren) {
    const imgEl = document.createElement('img');
    imgEl.src = 'src/img/gray_1.svg';
    listTr[indexTr].children[indexChildren].appendChild(imgEl)
    listTr[indexTr].children[indexChildren].classList.add('gray')
}

function pinkOrRed (indexTr, indexChildren, path, removeClass, addClass) {
    listTr[indexTr].children[indexChildren].firstChild.src = path
    listTr[indexTr].children[indexChildren].classList.remove(removeClass)
    listTr[indexTr].children[indexChildren].classList.add(addClass)
}

function deleteNumber (querySelectorString) {
    const stringNumber = document.querySelector(querySelectorString).children
    for (var i=0; i < stringNumber.length; i++) {
        if (stringNumber[i].textContent) {
            stringNumber[i].textContent = ""
        }
        if (stringNumber[i].dataset.number) {
            delete stringNumber[i].dataset.number
            stringNumber[i].classList.remove('filled')
        }
        if (stringNumber[i].children[0]) {
            stringNumber[i].removeChild(stringNumber[i].children[0])
        }
    }
}

listTop.forEach(function(cell) {
    cell.addEventListener('click', (event) => {
        if (listNumberTop.length > 0) {
            let index = Array.from(listTop).indexOf(event.target);
            if (!listTop[index].classList.contains('filled')) {
                arrangementOfNumbers (listNumberTop, listTop, index)
            }
        }
    }, false)  
});

listLeft.forEach(function(cell) {
    cell.addEventListener('click', (event) => {
        if (listNumberLeft.length > 0) {
            let index = Array.from(listLeft).indexOf(event.target);
            if (!listLeft[index].classList.contains('filled')) {
                arrangementOfNumbers (listNumberLeft, listLeft, index)
            }
        }
    }, false)  
});

listBottom.forEach(function(cell) {
    cell.addEventListener('click', (event) => {
        if (listNumberBottom.length > 0) {
            let index = Array.from(listBottom).indexOf(event.target);
            if (!listBottom[index].classList.contains('filled')) {
                arrangementOfNumbers (listNumberBottom, listBottom, index)
            }
        }
    }, false)   
});

buttonStart.onclick = () => {
    if (listNumberBottom.length === 0 && listNumberTop.length === 0 && listNumberLeft.length === 0) {
        console.log('Я работаю!')
        const top = document.querySelector('.topNumber').children;
        for (var i=0; i<top.length; i++) {
            openNumber (top[i])
            let number = Number(top[i].textContent)
            gray (number - 1, i)
        }
        const left = document.querySelector('.leftNumber').children;
        for (var i=0; i<left.length; i++) {
            openNumber (left[i])
            let number = Number(left[i].textContent)
            if (listTr[i].children[number - 1].firstChild) {
                pinkOrRed (i, number - 1, 'src/img/pink_2.svg', 'gray', 'pink')
            } else {
                gray (i, number - 1)
            }
        }
        const bottom = document.querySelector('.bottomNumber').children;
        for (var i=0; i<bottom.length; i++) {
            openNumber (bottom[i])
            let number = Number(bottom[i].textContent)
            if (listTr[10 - number].children[i].classList.contains('gray')) {
                pinkOrRed (10 - number, i, 'src/img/pink_2.svg', 'gray', 'pink')
            } else if (listTr[10 - number].children[i].classList.contains('pink')) {
                pinkOrRed (10 - number, i, 'src/img/red_3.svg', 'pink', 'red')
            } else {
                gray (10 - number, i)
            }
        }
    }
}

buttonReset.onclick = () => {
    window.location.reload()
}

buttonResetNumber.onclick = () => {
    listNumberTop = list.slice()
    listNumberLeft = list.slice()
    listNumberBottom = list.slice()
    deleteNumber ('.topNumber')
    deleteNumber ('.leftNumber')
    deleteNumber ('.bottomNumber')
    for (var i=0; i < listTr.length; i++) {
        for (var a=0; a < listTr[i].children.length; a++) {
            if (listTr[i].children[a].classList.contains('gray')) {
                listTr[i].children[a].classList.remove('gray')
                listTr[i].children[a].removeChild(listTr[i].children[a].children[0])
            }
            if (listTr[i].children[a].classList.contains('pink')) {
                listTr[i].children[a].classList.remove('pink')
                listTr[i].children[a].removeChild(listTr[i].children[a].children[0])
            }
            if (listTr[i].children[a].classList.contains('red')) {
                listTr[i].children[a].classList.remove('red')
                listTr[i].children[a].removeChild(listTr[i].children[a].children[0])
            }
        }
    }
}