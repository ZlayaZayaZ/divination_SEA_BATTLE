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

function arrangementOfNumbers (listNumber, listCells, event) {
    if (listNumber.length > 0) {
        let index = Array.from(listCells).indexOf(event.target);
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
                parent.removeChild(imgEl)
                parent.textContent = parent.dataset.number
                setTimeout(() => {
                    parent.dataset.number = parent.textContent;
                    parent.textContent = '';
                    parent.appendChild(imgEl)
                }, 1000)
            })
        }, 1000)
    }
}

// buttonTop.onclick = () => {
    listTop.forEach(function(cell) {
        cell.addEventListener('click', (event) => {
            if (listNumberTop.length > 0) {
                let index = Array.from(listTop).indexOf(event.target);
                if (listTop[index].classList.contains('filled')) {
                    // console.log(listBottom[index].classList.contains('filled'))
                } else {
                    listTop[index].classList.add('filled')
                    listTop[index].textContent = listNumberTop[0];
                    listNumberTop.splice(0,1);
                    setTimeout(() => {
                        listTop[index].dataset.number = listTop[index].textContent;
                        listTop[index].textContent = ""
                        const imgEl = document.createElement('img');
                        imgEl.src = 'src/img/gray_1.svg';
                        listTop[index].appendChild(imgEl)
                        imgEl.addEventListener('click', () => {
                            const parent = imgEl.parentElement
                            parent.removeChild(imgEl)
                            parent.textContent = parent.dataset.number
                            setTimeout(() => {
                                parent.dataset.number = parent.textContent;
                                parent.textContent = '';
                                parent.appendChild(imgEl)
                            }, 1000)
                        })
                    }, 1000)
                }
            }
        }, false)  
    });
// }

listLeft.forEach(function(cell) {
    cell.addEventListener('click', (event) => {
        if (listNumberLeft.length > 0) {
            let index = Array.from(listLeft).indexOf(event.target);
            if (listLeft[index].classList.contains('filled')) {
                // console.log(listBottom[index].classList.contains('filled'))
            } else {
                listLeft[index].classList.add('filled')
                listLeft[index].textContent = listNumberLeft[0];
                listNumberLeft.splice(0,1);
                setTimeout(() => {
                    listLeft[index].dataset.number = listLeft[index].textContent;
                    listLeft[index].textContent = ""
                    const imgEl = document.createElement('img');
                    imgEl.src = 'src/img/gray_1.svg';
                    listLeft[index].appendChild(imgEl)
                    imgEl.addEventListener('click', () => {
                        const parent = imgEl.parentElement
                        parent.removeChild(imgEl)
                        parent.textContent = parent.dataset.number
                        setTimeout(() => {
                            parent.dataset.number = parent.textContent;
                            parent.textContent = '';
                            parent.appendChild(imgEl)
                        }, 1000)
                    })
                }, 1000)
            }
        }
    }, false)  
});

// buttonLeft.onclick = () => {
//     listLeft.forEach(function(cell) {
//         cell.addEventListener('click', (event) => {
//             let index = Array.from(listLeft).indexOf(event.target);
//             if (listLeft[index].textContent) {
//                 listNumberLeft.unshift(listLeft[index].textContent)
//                 listLeft[index].textContent = ""
//             } else {
//                 listLeft[index].textContent = listNumberLeft[0];
//                 listNumberLeft.splice(0,1);
//             }
//         }, false)   
//     });
// }

// listLeft.forEach(function(cell) {
//     cell.addEventListener('click', arrangementOfNumbers(listNumberLeft, listLeft, this.event), false)   
// });

// buttonBottom.onclick = () => {
    listBottom.forEach(function(cell) {
        cell.addEventListener('click', (event) => {
            if (listNumberBottom.length > 0) {
                let index = Array.from(listBottom).indexOf(event.target);
                // console.log(listBottom[index].classList)
                if (listBottom[index].classList.contains('filled')) {
                    // console.log(listBottom[index].classList.contains('filled'))
                } else {
                    listBottom[index].classList.add('filled')
                    listBottom[index].textContent = listNumberBottom[0];
                    listNumberBottom.splice(0,1);
                    setTimeout(() => {
                        listBottom[index].dataset.number = listBottom[index].textContent;
                        listBottom[index].textContent = ""
                        const imgEl = document.createElement('img');
                        imgEl.classList.add('filled')
                        imgEl.src = 'src/img/gray_1.svg';
                        listBottom[index].appendChild(imgEl)
                        imgEl.addEventListener('click', () => {
                            const parent = imgEl.parentElement
                            parent.removeChild(imgEl)
                            parent.textContent = parent.dataset.number
                            setTimeout(() => {
                                parent.dataset.number = parent.textContent;
                                parent.textContent = '';
                                parent.appendChild(imgEl)
                            }, 1000)
                        })
                    }, 1000)
                }
            }
        }, false)   
    });
// }

buttonStart.onclick = () => {
    if (listNumberBottom.length === 0 && listNumberTop.length === 0 && listNumberLeft.length === 0) {
    // if (listNumberBottom.length === 0) {
    // console.log(listNumberTop.length === 0)
    // console.log(listNumberLeft.length)
    // if (listNumberTop.length === 0 && listNumberLeft.length === 0) {
        console.log('Я работаю!')
        const top = document.querySelector('.topNumber').children;
        for (var i=0; i<top.length; i++) {
            top[i].removeChild(top[i].children[0])
            top[i].textContent = top[i].dataset.number
            let number = Number(top[i].dataset.number)
            const imgEl = document.createElement('img');
            imgEl.src = 'src/img/gray_1.svg';
            listTr[number - 1].children[i].appendChild(imgEl)
            listTr[number - 1].children[i].classList.add('gray');
        }
        const left = document.querySelector('.leftNumber').children;
        for (var i=0; i<left.length; i++) {
            left[i].removeChild(left[i].children[0])
            left[i].textContent = left[i].dataset.number
            let number = Number(left[i].dataset.number)
            const imgEl = document.createElement('img');
            if (listTr[i].children[number - 1].firstChild) {
                listTr[i].children[number - 1].classList.remove('gray')
                listTr[i].children[number - 1].classList.add('pink')
                listTr[i].children[number - 1].firstChild.src = 'src/img/pink_2.svg'
            } else {
                imgEl.src = 'src/img/gray_1.svg';
                listTr[i].children[number - 1].classList.add('gray')
                listTr[i].children[number - 1].appendChild(imgEl)
            }
        }
        const bottom = document.querySelector('.bottomNumber').children;
        for (var i=0; i<bottom.length; i++) {
            bottom[i].removeChild(bottom[i].children[0])
            bottom[i].textContent = bottom[i].dataset.number
            let number = Number(bottom[i].dataset.number)
            const imgEl = document.createElement('img');
            if (listTr[10 - number].children[i].classList.contains('gray')) {
                listTr[10 - number].children[i].firstChild.src = 'src/img/pink_2.svg'
                listTr[10 - number].children[i].classList.remove('gray')
                listTr[10 - number].children[i].classList.add('pink')
            } else if (listTr[10 - number].children[i].classList.contains('pink')) {
                listTr[10 - number].children[i].firstChild.src = 'src/img/red_3.svg'
                listTr[10 - number].children[i].classList.remove('pink')
                listTr[10 - number].children[i].classList.add('red')
            } else {
                imgEl.src = 'src/img/gray_1.svg';
                listTr[10 - number].children[i].appendChild(imgEl)
                listTr[10 - number].children[i].classList.add('gray')
            }
        }
    }

}
