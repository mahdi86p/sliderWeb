const images = ['../images/productImages/image1.jpg', '../images/productImages/image2.jpg', '../images/productImages/image3.jpg', '../images/productImages/image4.jpg', '../images/productImages/image5.jpg', '../images/productImages/image6.jpg', '../images/productImages/image7.jpg', '../images/productImages/image8.jpg']
const products = [document.querySelector('.product1'), document.querySelector('.product2'), document.querySelector('.product3'), document.querySelector('.product4'), document.querySelector('.product5'), document.querySelector('.product6'), document.querySelector('.product7'), document.querySelector('.product8')]
const names = ['product1', 'product2', 'product3', 'product4', 'product5', 'product6', 'product7', 'product8']
const stars = ['&#11088;	&#11088;	&#11088;', '	&#11088;	&#11088;	&#11088;	&#11088;	&#11088;', '_', '_', '	&#11088;	&#11088;', '_', '_', '	&#11088;']
const prices = ['$130.67', '$50.99', '$512.30', '$60.94', '$169.48', '$45.32', '$98.65', '$45.39']

let i = 0
while (i <= 7) {
    products[i].children[1].children[1].style.color = '#D1D100'

    products[i].children[0].src = images[i]
    products[i].children[1].children[0].innerHTML = names[i]
    products[i].children[1].children[1].innerHTML = stars[i]
    products[i].children[1].children[2].innerHTML = prices[i]
    ++i
}