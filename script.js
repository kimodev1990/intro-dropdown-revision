const featuresArrow = document.getElementById("features-arrow");
const featuresMenu = document.getElementById("features-menu");
const companyArrow = document.getElementById("company-arrow");
const companyMenu = document.getElementById("company-menu");
const menuHamburger = document.getElementById("menu-hamburger-mobile");
const menuContentMobile = document.getElementById("menu-content-mobile");
const bgColor = document.getElementById("bg-menu-open");
const featuresArrowDesktop = document.getElementById("features-arrow-desktop");
const featuresContentDesktop = document.getElementById(
  "features-content-desktop"
);
const companyArrowDesktop = document.getElementById("company-arrow-desktop");
const companyContentDesktop = document.getElementById(
  "company-content-desktop"
);

featuresArrow.addEventListener("click", () => {
  featuresMenu.classList.toggle("hidden");
});

companyArrow.addEventListener("click", () => {
  companyMenu.classList.toggle("hidden");
});

menuHamburger.addEventListener("click", () => {
  menuHamburger.classList.toggle("open");
  menuContentMobile.classList.toggle("hidden");
  bgColor.classList.toggle("background-menu-open");
});

featuresArrowDesktop.addEventListener("click", () => {
  featuresContentDesktop.classList.toggle("hidden");
  featuresContentDesktop.classList.toggle("show");
});

companyArrowDesktop.addEventListener("click", () => {
  companyContentDesktop.classList.toggle("hidden");
  companyContentDesktop.classList.toggle("show");
});
