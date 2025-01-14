const productObg = JSON.parse(localStorage.getItem('newProducts'))
const productDiv = document.createElement('div')


window.onload = console.log(productObg)


productObg.forEach(product => {
    const parentDivElem = document.createElement('div')


    const productImgDiv = document.createElement('div')
    const productImg = document.createElement('img')
    const productImgSrc = product.proImg
    productImg.src = productImgSrc

    const productNameDiv = document.createElement('div')
    const productName = product.proName
    productNameDiv.innerHTML = productName

    const productStarsDiv = document.createElement('div')
    const productStars = product.proStars
    productStarsDiv.innerHTML = productStars

    const productPriceDiv = document.createElement('div')
    const productPrice = product.proPrice
    productPriceDiv.innerHTML = productPrice

    
});