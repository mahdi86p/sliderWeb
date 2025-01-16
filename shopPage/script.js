const images = ['../images/productImages/image1.jpg', '../images/productImages/image2.jpg', '../images/productImages/image3.jpg', '../images/productImages/image4.jpg', '../images/productImages/image5.jpg', '../images/productImages/image6.jpg', '../images/productImages/image7.jpg', '../images/productImages/image8.jpg']
const products = [document.querySelector('.product1'), document.querySelector('.product2'), document.querySelector('.product3'), document.querySelector('.product4'), document.querySelector('.product5'), document.querySelector('.product6'), document.querySelector('.product7'), document.querySelector('.product8')]
const names = ['product1', 'product2', 'product3', 'product4', 'product5', 'product6', 'product7', 'product8']
const stars = ['&#11088;	&#11088;	&#11088;', '	&#11088;	&#11088;	&#11088;	&#11088;	&#11088;', '_', '_', '	&#11088;	&#11088;', '_', '_', '	&#11088;']
const prices = ['$130.67', '$50.99', '$512.30', '$60.94', '$169.48', '$45.32', '$98.65', '$45.39']
const allProducts = document.querySelector('.Orderedproducts')
const productToStore = []
const sumPriceElem = document.querySelector('#sumPrice')
const alertElem = document.querySelector('#alert')
const paymentBtn = document.querySelector('#paymentBtn')
const modal = document.querySelector('#modal')
const body = document.body

let sumPrice = 0;

let allProductsArray;

let i = 0
while (i <= (names.length - 1)) {
    products[i].children[1].children[1].style.color = '#D1D100'

    products[i].children[0].src = images[i]
    products[i].children[1].children[0].innerHTML = names[i]
    products[i].children[1].children[1].innerHTML = stars[i]
    products[i].children[1].children[2].innerHTML = prices[i]
    ++i
}


products.forEach(function (event) {
    event.addEventListener('click', (product) => {
        alertElem.style.display = 'none'

        let parentDiv = document.createElement('div')
        let productNameDiv = document.createElement('div')
        let productStarDiv = document.createElement('div')
        let producPriceDiv = document.createElement('div')
        let productDeleteDiv = document.createElement('div')

        let allProduct = product.currentTarget

        let productImg = allProduct.children[0].cloneNode(true)
        productImg.style.width = '50px'

        let productDesc = allProduct.children[1]

        let productName = productDesc.children[0].innerHTML
        let productStar = productDesc.children[1].innerHTML
        let productPrice = productDesc.children[2].innerHTML

        productNameDiv.innerHTML = productName
        productNameDiv.setAttribute('id', 'productName')

        productStarDiv.innerHTML = productStar
        productStarDiv.setAttribute('id', 'productStar')

        producPriceDiv.innerHTML = productPrice
        producPriceDiv.setAttribute('id', 'productPrice')

        productDeleteDiv.innerHTML = '🗑️'
        productDeleteDiv.setAttribute('id', 'delBtn')

        parentDiv.append(productImg)
        parentDiv.append(productNameDiv)
        parentDiv.append(productStarDiv)
        parentDiv.append(producPriceDiv)
        parentDiv.append(productDeleteDiv)

        allProducts.append(parentDiv)

        sumPrice += +(productPrice.slice(1))

        sumPriceElem.innerHTML = 'sumPrice = $' + sumPrice.toFixed(2)

        productDeleteDiv.addEventListener('click', (event) => {
            const PriceDelete = event.target.parentElement.children[3].innerHTML.slice(1)
            const deletedElem = event.target.parentElement

            sumPrice -= PriceDelete
            sumPriceElem.innerHTML = 'sumPrice = $' + sumPrice.toFixed(2)

            if (allProducts.childElementCount === 3) {
                alertElem.style.display = 'block'
            }

            deletedElem.remove()
        })
    })
})


paymentBtn.addEventListener('click', function () {
    allProductsArray = Array.from(allProducts.children)
    const sendToShoppingCart = document.createElement('button')
    sendToShoppingCart.innerHTML = 'Send to ShopingCart'
    sendToShoppingCart.classList = 'sendClass'
    modal.style.opacity = 1

    allProductsArray.forEach(element => {
        if (element.children.length === 5) {
            element.children[4].remove()

            modal.append(element)

            sumPrice = 0
            sumPriceElem.innerHTML = 'sumPrice = $' + sumPrice.toFixed(2)

            alertElem.style.display = 'block'
            body.style.overflow = 'hidden';
        }
    });

    modal.append(sendToShoppingCart)

    sendToShoppingCart.addEventListener('click', function () {
        if (sendToShoppingCart.innerHTML !== 'Sended!') {
            // if sendtoshop Btn.innerHTML !== 'Sended!' -->
            allProductsArray.forEach(product => {
                if (product.id !== 'alert') {
                    const proImg = product.children[0].src
                    const proName = product.children[1].innerHTML
                    const proStars = product.children[2].innerHTML
                    const proPrice = product.children[3].innerHTML

                    productToStore.push(
                        { proImg, proName, proStars, proPrice }
                    )

                    console.log(productToStore , product)
                }

            })

            if (JSON.parse(localStorage.newProducts) === null) {
                localStorage.setItem('newProducts', JSON.stringify(productToStore))
            }

            else {
                if (sendToShoppingCart.innerHTML !== 'Sended!') {
                    let existingProducts = JSON.parse(localStorage.newProducts);
                    existingProducts = existingProducts.concat(productToStore);
                    localStorage.setItem('newProducts', JSON.stringify(existingProducts));
                    location.href = '../calculatPage/index.html'
                }
            }


            sendToShoppingCart.innerHTML = 'Sended!'
        }
    })
})

window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        modal.style.opacity = 0
        modal.innerHTML = ''
        body.style.overflow = '';
    }
})