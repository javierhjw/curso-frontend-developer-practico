const menuEmail = document.querySelector(".navbar-right");
const desktopMenu = document.querySelector(".desktop-menu");

const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

const menuCarroIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");

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


