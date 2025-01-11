const images = ['../images/productImage/image1.jpg', '../images/productImage/image2.jpg', '../images/productImage/image3.jpg', '../images/productImage/image4.jpg', '../images/productImage/image5.jpg', '../images/productImage/image6.jpg', '../images/productImage/image7.jpg', '../images/productImage/image8.jpg']
const products = [document.querySelector('.product1'), document.querySelector('.product2'), document.querySelector('.product3'), document.querySelector('.product4'), document.querySelector('.product5'), document.querySelector('.product6'), document.querySelector('.product7'), document.querySelector('.product8')]
const stars = ['***' , '*****' , '' , '' , '**' , '' , '' , '*']


let i = 0
while(i <= 7){
    products[i].children[0].src = images[i] 
    console.log(stars[i] ,  products[i].children[0])
    ++i
}