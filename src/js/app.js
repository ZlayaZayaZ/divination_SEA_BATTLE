const buttonTop = document.querySelector('.top');
const buttonLeft = document.querySelector('.left');
const buttonBottom = document.querySelector('.bottom');
const buttonStart = document.querySelector('.start');

const listTop = document.querySelector('.topNumber').childNodes;
// const listTop = document.querySelector('.topNumber').children;
const listLeft = document.querySelector('.leftNumber').childNodes;
const listBottom = document.querySelector('.bottomNumber').childNodes;

const listTr = document.querySelectorAll('.line')
console.log(listTr)
console.log(listTr[0].children[6].textContent)

let listNumberTop = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let listNumberLeft = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let listNumberBottom = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

buttonTop.onclick = () => {
    listTop.forEach(function(cell) {
        cell.addEventListener('click', (event) => {
            if (listNumberTop.length > 0) {
                let index = Array.from(listTop).indexOf(event.target);
                if (listTop[index].textContent) {
                    listNumberTop.unshift(listTop[index].textContent)
                    listTop[index].textContent = ""
                } else {
                    listTop[index].textContent = listNumberTop[0];
                    listNumberTop.splice(0,1);
                }
            }
        }, false)  

    });
}

buttonLeft.onclick = () => {
    listLeft.forEach(function(cell) {
        cell.addEventListener('click', (event) => {
            let index = Array.from(listLeft).indexOf(event.target);
            if (listLeft[index].textContent) {
                listNumberLeft.unshift(listLeft[index].textContent)
                listLeft[index].textContent = ""
            } else {
                listLeft[index].textContent = listNumberLeft[0];
                listNumberLeft.splice(0,1);
            }
        }, false)   
    });
}

buttonBottom.onclick = () => {
    listBottom.forEach(function(cell) {
        cell.addEventListener('click', (event) => {
            let index = Array.from(listBottom).indexOf(event.target);
            if (listBottom[index].textContent) {
                listNumberBottom.unshift(listBottom[index].textContent)
                listBottom[index].textContent = ""
            } else {
                listBottom[index].textContent = listNumberBottom[0];
                listNumberBottom.splice(0,1);
            }
        }, false)   
    });
}

buttonStart.onclick = () => {
    // if (listNumberBottom.length === 0 && listNumberTop.lenght === 0 && listNumberLeft.lenght === 0) {
    console.log(listNumberTop.length === 0)
    console.log(listNumberLeft.length)
    if ((listNumberTop.length === 0) && (listNumberLeft.lenght === 0)) {
        const top = document.querySelector('.topNumber').children;
        for (var i=0; i<top.length; i++) {
            let number = Number(top[i].textContent)
            const imgEl = document.createElement('img');
            imgEl.src = 'src/img/gray_1.svg';
            // console.log(Boolean(listTr[number].children[i].firstChild))
            listTr[number - 1].children[i].appendChild(imgEl)
            // console.log(Boolean(listTr[number - 1].children[i].firstChild))
        }
        const left = document.querySelector('.leftNumber').children;
        for (var i=0; i<top.length; i++) {
            let number = Number(left[i].textContent)
            const imgEl = document.createElement('img');
            if (listTr[i].children[number - 1].firstChild) {
                listTr[i].children[number - 1].firstChild.src = 'src/img/pink_2.svg'
            } else {
                imgEl.src = 'src/img/gray_1.svg';
                listTr[i].children[number - 1].appendChild(imgEl)
            }
        }
    }

}

// const imgEl = document.createElement('img');
// imgEl.src = 'src/img/goblin.png';
// let indexNow = getRandomInt(0, cells.length);
// cells[indexNow].appendChild(imgEl);

// const img = document.querySelector('img')
//     cells[index].appendChild(img);