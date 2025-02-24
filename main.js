const barraEmail=document.querySelector('.navbar-email');
const DesktopMenu=document.querySelector('.desktop-menu');
const mobileMenu=document.querySelector('.mobile-menu');
const menuMobileIcon=document.querySelector('.menu');

const carrito=document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer=document.querySelector('#shoppingCartContainer');

const cardsContainer=document.querySelector('.cards-container')

const productDetailContainer=document.querySelector('#productDetail');
const productDetailClose = document . querySelector ('.product-detail-close')


barraEmail.addEventListener('click', mostrarBarraEmail);
menuMobileIcon.addEventListener('click', mostrarMobileMenu);
carrito.addEventListener('click', mostrarProductDetailCarrito);
productDetailClose.addEventListener('click', productDetailClosed)


function mostrarBarraEmail(){
    const isProductDetailClose=productDetailContainer.classList.contains('inactive');
    if (!isProductDetailClose){
        productDetailContainer.classList.add('inactive');
    }
    const asideClosed=shoppingCartContainer.classList.contains('inactive');
    if(!asideClosed){
        shoppingCartContainer.classList.add('inactive')
    }
    DesktopMenu.classList.toggle('inactive');
}
function mostrarMobileMenu(){

    const isProductDetailClose=productDetailContainer.classList.contains('inactive');
    if (!isProductDetailClose){
        productDetailContainer.classList.add('inactive');
    }
    // LA CONSTANTE CREADA ES PARA SABER SI EL ELEMENTO MENCIONADO CONTIENE LA CLASE "INACTIVE"
    
    const asideClosed=shoppingCartContainer.classList.contains('inactive');
    // EL IF CHECKEA SI EL ELEMENTO TIENE O NO ESA CLASE, Y EN CASO DE NO TENERLA SE LA AGREGA PARA QUE NO SE MUESTRE SOBRE EL ELEMENTO QUE QUEREMOS MOSTRAR EN LA FUNCTION. LUEGO LE QUITA LA CLASE INACTIVE AL ELEMENTO A MOSTRAR PARA QUE ESTE APAREZCA
    if(!asideClosed){
        shoppingCartContainer.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive');
}
function mostrarProductDetailCarrito(){
    

    const desktopMenuClosed=DesktopMenu.classList.contains('inactive')
    if (!desktopMenuClosed){
        DesktopMenu.classList.add('inactive')
    }
    const mobileMenuClosed=mobileMenu.classList.contains('inactive');
    if (!mobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    const isProductDetailClose=productDetailContainer.classList.contains('inactive');
    if (!isProductDetailClose){
        productDetailContainer.classList.add('inactive');
    }
    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside () {
    shoppingCartContainer.classList.add('inactive')
    DesktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');

    productDetailContainer.classList.remove('inactive')
    
}
function productDetailClosed() {
    productDetailContainer.classList.add('inactive')
}

const productList=[]
productList.push({
    name:'Bike',
    price: 120.00,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
}
)
productList.push({
    name:'Nova SS',
    price: 30000,
    image: 'https://www.kindpng.com/picc/m/736-7363802_chevy-nova-ss-1969-png-transparent-png.png'
}
)
productList.push({
    name:'ToyotaCorolla',
    price: 12000,
    image: 'https://www.pngitem.com/pimgs/m/638-6380605_toyota-corolla-car-png-transparent-png.png'
}
)
productList.push({
    name:'lambo',
    price: 54000,
    image: 'https://www.pngitem.com/pimgs/m/2-25960_lamborghini-png-image-lamborghini-gallardo-lp560-4-transparent.png'
}
)
productList.push({
    name:'Avión de papel',
    price: 5400000,
    image: 'https://media.istockphoto.com/id/515788110/es/foto/avi%C3%B3n-de-papel-flying.jpg?s=612x612&w=0&k=20&c=wNklOHtZwBnI6ymzk4NWmKJIeyEPXsEeeFBp-1Ga7Wk='
}
)
productList.push({
    name:'Camello táctico',
    price: 540000000,
    image: 'https://leteonoticias.files.wordpress.com/2021/02/camellotactico.jpg'
}
)

{/* 
<div class="cards-container">
    
    <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
    <div class="product-info">
    <div>
            <p>$120,00</p>
            <p>Bike</p>
        </div>
        <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
        </div>
    </div>
</div> 
*/
}


function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        const productImg=document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside)

        const productInfo=document.createElement('div');
        productInfo.classList.add('product-info');
    
        const infoDiv=document.createElement('div')
        
        const productPrice=document.createElement('p')
        productPrice.innerText = '$' + product.price
        const productName=document.createElement('p')
        productName.innerText = product.name
        
        infoDiv.appendChild(productPrice)
        infoDiv.appendChild(productName)
    
    
        const productFigure=document.createElement('figure')
        const productImgFigure=document.createElement('img')
        productImgFigure.setAttribute('src', './icons/bt_add_to_cart.svg')
        
        productFigure.appendChild(productImgFigure)
    
        productInfo.appendChild(infoDiv)
        productInfo.appendChild(productFigure)
    
        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)
    
        cardsContainer.appendChild(productCard)
    
    }
}
renderProducts(productList)