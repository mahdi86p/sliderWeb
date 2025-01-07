const body = document.body;

const paragrafs = [
    'Histori Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima similique nostrum illum, ex vel quod commodi neque in voluptatem ipsa reiciendis corrupti deserunt necessitatibus excepturi dolores reprehenderit ullam quasi tenetur?',
    'Vision eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'Goals enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
]

const ul = document.querySelector('ul');
const ulItems = Array.from(ul.children);
const titleShow = document.querySelector('#title')
const descShow = document.querySelector('#description')
const image = document.querySelector('img')
const home = document.querySelector('.Home')
const imgLink = document.querySelector('a')
const downloadTxt = document.querySelector('.download')
const shopLi = document.querySelector('.shop')

window.addEventListener('DOMContentLoaded', () => {
    let randomNum = Math.ceil(Math.random() * 3)
    image.src = 'images/' + randomNum + '.jpg'
    imgLink.href = 'images/' + randomNum + '.jpg'

    titleShow.textContent = localStorage.getItem('title')
    descShow.textContent = localStorage.getItem('desc')

    ulItems.forEach(function (item) {
        console.log(item, localStorage.title)
        if (item.textContent === localStorage.title) {
            item.classList.add('whitebg')
        }
    })
})


ul.addEventListener('click', (event) => {
    event.target.classList.add('whitebg');

    ulItems.forEach(function (item) {
        if (item !== event.target) {
            item.classList.remove('whitebg')
        }
    })

    const titre = event.target.textContent;
    const whiteBgUl = ulItems.findIndex(item => item.classList.contains('whitebg'))

    titleShow.textContent = titre
    descShow.textContent = paragrafs[whiteBgUl]

    localStorage.setItem('title', titre)
    localStorage.setItem('desc', paragrafs[whiteBgUl])
    localStorage.setItem('target', JSON.stringify(event.target))
})

const letters = ['W', 'e', 'l', 'c', 'o', 'm', 'e', ' ', 'b', 'a', 'c', 'k', ' ', 't', 'o', ' ', 'H', 'o', 'm', 'e', '👋🏻', '.'];

let currentLetterIndex = 0;

const addLetter = () => {
    if (currentLetterIndex < letters.length) {
        home.innerHTML += letters[currentLetterIndex];
        currentLetterIndex++;
        setTimeout(addLetter, 150);
    }
};

// Start adding letters  

window.addEventListener('DOMContentLoaded' , addLetter);

image.addEventListener('mousemove', (event) => {
    downloadTxt.style.opacity = 1
    downloadTxt.style.top = event.pageY + 'px'
    downloadTxt.style.left = event.pageX + 'px'
})

image.addEventListener('mouseout', (event) => {
    downloadTxt.style.opacity = 0
})