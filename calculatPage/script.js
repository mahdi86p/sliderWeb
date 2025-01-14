const productObg = JSON.parse(localStorage.getItem('newProducts'))


console.log(productObg)


productObg.forEach(product => {
    const productDiv = document.createElement('div')
    const productImgDiv = document.createElement('div')
    const productNameDiv = document.createElement('div')
    const productStarsDiv = document.createElement('div')
    const productPriceDiv = document.createElement('div')
    
    productImgDiv
});