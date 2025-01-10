const letters = ['n', 'i', 'c', 'e', ' ', 't', 'o', ' ', 'm', 'e', 'e', 't', ' ', 'y', 'o', 'u', '😁', '.', '<br>', 's', 'c', 'r', 'o', 'o', 'l', 'i', 'n', 'g', ' ' , 'd', 'o', 'w', 'n', ' ' , 't', 'o', ' '  , 's', 'e', 'e', ' ' , 'm', 'o', 'r', 'e', ' ' , 'a', 'b', 'o', 'u', 't' , '.'];

let currentLetterIndex = 0;

const meet = document.querySelector('.bigFont')

const addLetter = () => {
    if (currentLetterIndex < letters.length) {
        meet.innerHTML+= letters[currentLetterIndex];
        currentLetterIndex++;
        setTimeout(addLetter, 150);
    }
};

// Start adding letters  

window.addEventListener('load', addLetter);
