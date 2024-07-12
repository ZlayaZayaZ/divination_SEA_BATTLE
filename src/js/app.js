const buttonTop = document.querySelector('.top');
const buttonLeft = document.querySelector('.left');
const buttonBottom = document.querySelector('.bottom');
const buttonStart = document.querySelector('.start');

const listTop = document.querySelector('.topNumber').childNodes;
// const listTop = document.querySelector('.topNumber').children;
const listLeft = document.querySelector('.leftNumber').childNodes;
const listBottom = document.querySelector('.bottomNumber').childNodes;

const listTr = document.querySelectorAll('.line')
// console.log(listTr)
// console.log(listTr[0].children[6].textContent)

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
    if (listNumberBottom.length === 0 && listNumberTop.length === 0 && listNumberLeft.length === 0) {
    // if (listNumberBottom.length === 0) {
    // console.log(listNumberTop.length === 0)
    // console.log(listNumberLeft.length)
    // if (listNumberTop.length === 0 && listNumberLeft.length === 0) {
        console.log('Я работаю!')
        const top = document.querySelector('.topNumber').children;
        for (var i=0; i<top.length; i++) {
            let number = Number(top[i].textContent)
            const imgEl = document.createElement('img');
            imgEl.src = 'src/img/gray_1.svg';
            listTr[number - 1].children[i].appendChild(imgEl)
        }
        const left = document.querySelector('.leftNumber').children;
        for (var i=0; i<left.length; i++) {
            let number = Number(left[i].textContent)
            const imgEl = document.createElement('img');
            if (listTr[i].children[number - 1].firstChild) {
                listTr[i].children[number - 1].firstChild.src = 'src/img/pink_2.svg'
            } else {
                imgEl.src = 'src/img/gray_1.svg';
                listTr[i].children[number - 1].appendChild(imgEl)
            }
        }
        const bottom = document.querySelector('.bottomNumber').children;
        for (var i=0; i<bottom.length; i++) {
            let number = Number(bottom[i].textContent)
            const imgEl = document.createElement('img');
            if (listTr[10 - number].children[i].firstChild) {
                if (listTr[10 - number].children[i].firstChild.src == 'file:///C:/Users/zlaya/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/Git%20Pages/Divination/src/img/gray_1.svg') {
                    listTr[10 - number].children[i].firstChild.src = 'src/img/pink_2.svg'
                } else if (listTr[10 - number].children[i].firstChild.src == 'file:///C:/Users/zlaya/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/Git%20Pages/Divination/src/img/pink_2.svg') {
                    listTr[10 - number].children[i].firstChild.src = 'src/img/red_3.svg'
                }
            } else {
                imgEl.src = 'src/img/gray_1.svg';
                listTr[10 - number].children[i].appendChild(imgEl)
            }
        }
    }

}
