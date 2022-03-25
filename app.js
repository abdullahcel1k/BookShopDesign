const likeButtons = document.querySelectorAll(".like-book");

const switchClasses = (element, siniflar) => {
 siniflar.forEach(sinif => {
  element.classList.toggle(sinif);
 });
}

likeButtons.forEach(element => {
 element.addEventListener("click", (button) => {
  const siniflar = ["unliked", "liked"];
  switchClasses(element, siniflar);
 });
});

const obj = {
 date: new Date()
};
const subscribeEmail = () => {
 const emailInput = document.querySelector(".newsletter-email");
 const emailRegex = '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$';
 console.log(emailInput.value.match(emailRegex));
}

const nextSlide = () => {
 const sliderImages = document.querySelectorAll(".img-container");
 let firstSlide = sliderImages[0];
 sliderImages[sliderImages.length - 1].after(firstSlide);
}


const prevSlide = () => {
 const sliderImages = document.querySelectorAll(".img-container");
 let lastSlide = sliderImages[sliderImages.length - 1];
 sliderImages[0].before(lastSlide);
}
