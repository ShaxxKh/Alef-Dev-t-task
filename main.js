const burgerOpen = document.getElementById('open-burger');
const burger = document.getElementById('burger');
const burgerClose = document.getElementById('close-burger');

const likeButtons = document.getElementsByClassName('card__like')
const unlikeMessage = document.getElementById('unlike-message')
const likeMessage = document.getElementById('like-message')

const priceSortingBtn = document.getElementById('price-sorting')
const priceDirection = document.getElementById('price-arrow')
const prices = document.getElementsByClassName('price')

const ageSortingBtn = document.getElementById('age-sorting')
const ages = document.getElementsByClassName('age')
const ageDirection = document.getElementById('age-arrow')

function ageSorting(){
    let ageArray = []
    let ageDescending

    for(const age of ages){
        let ageNumbered = Number(age.textContent.split(' ').join(''))
        ageArray.push(ageNumbered)
    }
    ageDescending = ageArray.sort((a, b) => a - b).reverse()



    ageSortingBtn.addEventListener('click', () => {
        ageDescending.reverse().forEach((number, index) => {
            for(const age of ages){
                if(Number(age.textContent.split(' ').join('')) == number){
                    age.parentElement.parentElement.parentElement.parentElement.parentElement.style.order = index
                }
            }
        })
        ageDirection.classList.toggle('arrow-ascending')

    })
}
function priceSorting() {
let priceArray = []
let priceDescending

for(const price of prices){
    let priceNumbered = Number(price.textContent.split(' ').join(''))
    priceArray.push(priceNumbered)
}
priceDescending = priceArray.sort((a, b) => a - b).reverse()



priceSortingBtn.addEventListener('click', () => {
    priceDescending.reverse().forEach((number, index) => {
        for(const price of prices){
            if(Number(price.textContent.split(' ').join('')) == number){
                price.parentElement.parentElement.parentElement.style.order = index
            }
        }
    })
    priceDirection.classList.toggle('arrow-ascending')

})
}
function removeLikeMessage() {
    unlikeMessage.classList.remove('show-message')
    likeMessage.classList.remove('show-message')
}

function toggleLike(){
    
        if(this.className.includes('no-like')){
            this.classList.remove('no-like')
            this.classList.add('liked')
            likeMessage.classList.add('show-message')
            setTimeout(removeLikeMessage, 2000)
        }
        else if(this.className.includes('liked')){
            this.classList.remove('liked')
            this.classList.add('no-like')
            unlikeMessage.classList.add('show-message')
            setTimeout(removeLikeMessage, 2000)
        }
    
    
}

for(const key of like){
    key.classList.add('no-like')
    key.addEventListener('click', toggleLike)
}

burgerOpen.addEventListener('click', () => {
    burger.classList.add('show-burger')
});

burgerClose.addEventListener('click', () => {
    burger.classList.remove('show-burger')
})

const goToTop = document.getElementById('back-to-top')

function trackScroll(){
    let scrolled = window.pageYOffset;
    let coords = document.documentElement.clientHeight;

    if(scrolled > coords){
        goToTop.classList.add('show-go-top')
    }
    if(scrolled < coords){
        goToTop.classList.remove('show-go-top')
    }
}

function backToTop() {
    if( window.pageYOffset > 0){
        window.scrollBy(0, -80)
        setTimeout(backToTop, 0)
    }
}
window.addEventListener('scroll', trackScroll);
goToTop.addEventListener('click', backToTop);
window.addEventListener('DOMContentLoaded', priceSorting)
window.addEventListener('DOMContentLoaded', ageSorting)
