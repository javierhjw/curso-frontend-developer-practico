const menuEmail = document.querySelector(".navbar-right");
const desktopMenu = document.querySelector(".desktop-menu");

const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

const menuCarroIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");

const cardsContainer = document.querySelector('.cards-container');

// 1
menuEmail.addEventListener("click", toggleDesktopMenu);
// 2
menuHamIcon.addEventListener("click", toggleMobileMenu);
// 3
menuCarroIcon.addEventListener("click", toggleMenuCarroAside);

//1
function toggleDesktopMenu() {
//   const isAsideClosed = aside.classList.contains("inactive");

//   if (!isAsideClosed) {
//     aside.classList.add("inactive");
//   }
  desktopMenu.classList.toggle("inactive");
};

//2
function toggleMobileMenu() {
  const isAsideClosed = aside.classList.contains("inactive");

  if (!isAsideClosed) {
    aside.classList.add("inactive");
  }

  mobileMenu.classList.toggle("inactive");
};

//3
function toggleMenuCarroAside() {
    const ismobileMenuClosed = mobileMenu.classList.contains("inactive");
    if (!ismobileMenuClosed) {
      mobileMenu.classList.add("inactive");
    }

  aside.classList.toggle("inactive");
}

// Creacion de objetos dentro del Array
const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://cdn.pixabay.com/photo/2019/08/13/20/51/bike-4404230_640.jpg',
});
productList.push({
  name: 'Bike-G',
  price: 1300,
  image: 'https://cdn.pixabay.com/photo/2018/07/07/14/44/bicycle-3522238_1280.jpg',
});
productList.push({
  name: 'Yellor-Bike',
  price: 34,
  image: 'https://media.istockphoto.com/id/521544452/es/foto/amarillo-bicicletas-en-amsterdam.jpg?s=1024x1024&w=is&k=20&c=WmUTNop_bTbWOgJYaM5Z56YNcs9AvT-K03UosgvgAsE=',
});
productList.push({
  name: 'Pinky-Bike',
  price: 34,
  image: 'https://cdn.pixabay.com/photo/2015/05/28/22/29/bicycle-788733_640.jpg',
});

/*
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
*/


function renderProdut(arr){
  for (product of productList){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
  
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
  
    const productInfoFigure = document.createElement('figure');
    const productInfoImgCard = document.createElement('img');
    productInfoImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');
  
    productInfoFigure.appendChild(productInfoImgCard);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard);
  
  }
}

renderProdut(productList);

/*
for (product of productList){
  const productCard = document.createElement('div');
  productCard.classList.add('product-card');

  const productImg = document.createElement('img');
  productImg.setAttribute('src', product.image);

  const productInfo = document.createElement('div');
  productInfo.classList.add('product-info');

  const productInfoDiv = document.createElement('div');

  const productPrice = document.createElement('p');
  productPrice.innerText = '$' + product.price;
  const productName = document.createElement('p');
  productName.innerText = product.name;

  productInfoDiv.appendChild(productPrice);
  productInfoDiv.appendChild(productName);

  const productInfoFigure = document.createElement('figure');
  const productInfoImgCard = document.createElement('img');
  productInfoImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');

  productInfoFigure.appendChild(productInfoImgCard);

  productInfo.appendChild(productInfoDiv);
  productInfo.appendChild(productInfoFigure);

  productCard.appendChild(productImg);
  productCard.appendChild(productInfo);

  cardsContainer.appendChild(productCard);

}
*/