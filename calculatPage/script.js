const allProduct = document.querySelector('.allProduct')

const productObg = JSON.parse(localStorage.getItem('newProducts'))
const productDiv = document.createElement('div')


window.onload = console.log(productObg)


productObg.forEach(product => {
    const parentDivElem = document.createElement('div')
    parentDivElem.className = 'product'

    const productImgDiv = document.createElement('div')
    const productImg = document.createElement('img')
    const productImgSrc = product.proImg
    
    productImg.id = 'img'
    productImg.setAttribute('width' , '100px')

    productImg.src = productImgSrc
    productImgDiv.append(productImg)

    const productNameDiv = document.createElement('div')
    const productName = product.proName
    productNameDiv.innerHTML = productName

    const productStarsDiv = document.createElement('div')
    const productStars = product.proStars
    productStarsDiv.innerHTML = productStars

    const productPriceDiv = document.createElement('div')
    const productPrice = product.proPrice
    productPriceDiv.innerHTML = productPrice


    parentDivElem.append(productImgDiv , productNameDiv , productStarsDiv , productPriceDiv)

    allProduct.append(parentDivElem)
});