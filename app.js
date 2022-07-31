const headerBtn = document.getElementById('header-btn')
const headerModal = document.getElementById('site-modal')
const headerOverlay = document.getElementById('header__overlay')

// TODO modal
headerBtn.addEventListener('click', () => {
    headerModal.classList.toggle('hidden')
    headerOverlay.classList.remove('hidden')
})
headerOverlay.addEventListener('click', () => {
    headerModal.classList.add('hidden')
    headerOverlay.classList.add('hidden')
})
// hero images
const imgContainer = document.querySelector('.hero-img__inner')
const mainImg = document.querySelector('.hero-big__img')


for (let i = 1; i <= 4; i++) {
    const createImg = document.createElement('img')
    createImg.src = `./images/img-${i}.jpg`
    createImg.alt = 'choose img'
    createImg.setAttribute('data-set', `${i}`)
    imgContainer.appendChild(createImg)
}
imgContainer.addEventListener('click', (e) => {
    if(e.srcElement.nodeName == 'IMG') {
        const idImage = e.target.getAttribute('data-set')
        mainImg.src = `./images/img-${idImage}.jpg`
    }
})


// plus minus
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const text = document.getElementById('text')
const showBtn = document.getElementById('show-btn')
const priceEl = document.querySelector('.price')
const displayAmount = document.getElementById('amount')
const n = document.getElementById('n')


let price = 125
let amount = 0
let total = 0





plus.addEventListener('click', () => {
    amount ++
    text.textContent = amount
})
minus.addEventListener('click', () => {
    if (amount > 0) {
        amount --
        text.textContent = amount
    }
})


showBtn.addEventListener('click', () => {
        priceEl.textContent = amount
        n.textContent = amount
        calc(price,amount)
    if(amount == 0) {
        list.
        n.classList.add('hidden')
    } else {
        n.classList.remove('hidden')
    }
})

function calc(price,amount) {
    const allPrice = price * amount
    displayAmount.textContent = allPrice
}



// plus.addEventListener('click', () => {
//     amount ++
//     text.textContent = amount
//     priceEl.textContent = amount
//     calc(price,amount)
// })
// minus.addEventListener('click', () => {
//     if (amount > 0) {
//         amount --
//         text.textContent = amount
//         calc(price,amount)
//     }
// })

// function calc(price,amount) {
//     const allPrice = price * amount
//     displayAmount.textContent = allPrice
// }





// TODO images modal
const imgModal = document.querySelector('.modal-images')
const imgInner = document.querySelector('.modal-image__inner')
const modalImg = document.querySelector('.modal-big__modal')
const prewBtn = document.querySelector('.site-prew-btn')
const nextBtn = document.querySelector('.site-next-btn')
const closeBtn = document.getElementById('close-btn')
const overlay = document.getElementById('overlay')
const showImg = document.getElementById('show-img')

function removeHidden() {
    imgModal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}
function addHidden() {
    imgModal.classList.add('hidden')
    overlay.classList.add('hidden')
}
showImg.addEventListener('click', removeHidden)
overlay.addEventListener('click', addHidden)
closeBtn.addEventListener('click', addHidden)





let imageNumber = 1
activeChanger(imageNumber)

prewBtn.addEventListener('click', () => {
    if (imageNumber < 5) {
        imageNumber--
        if(imageNumber <= 0) {
            imageNumber = 4
        }
    }
    modalImg.src = `./images/img-${imageNumber}.jpg`
    activeChanger(imageNumber)
})
nextBtn.addEventListener('click', () => {
    if (imageNumber < 5) {
        imageNumber++
        if(imageNumber >= 5) {
            imageNumber = 1
        }
    }
    modalImg.src = `./images/img-${imageNumber}.jpg`
    activeChanger(imageNumber)
})

for (let i = 1; i <= 4; i++) {
    const createModalImg = document.createElement('img')
    createModalImg.src = `./images/img-${i}.jpg`
    createModalImg.alt = 'choose img'
    createModalImg.setAttribute('data-set', `${i}`)
    imgInner.appendChild(createModalImg)
}

imgInner.addEventListener('click', (e) => {
    if(e.srcElement.nodeName == 'IMG') {
        const idImageI = e.target.getAttribute('data-set')
        modalImg.src = `./images/img-${idImageI}.jpg`
        imageNumber = +idImageI
        imgInner.childNodes.forEach((img,i) => {
            if(idImageI == i + 1) {
                img.classList.add('active-img')
            } else {
                img.classList.remove('active-img')
            }
        })
    }
})

function activeChanger(id) {
    imgInner.childNodes.forEach((img,i) => {
        if(id == i + 1) {
            img.classList.add('active-img')
        } else {
            img.classList.remove('active-img')
        }
    })
}



