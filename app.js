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

const Kitaplar = [
 {
  id: 1,
  image: "assets/images/karatay-sozu.jpg",
  qty: 2,
  unitPrice: 46.99
 },
 {
  id: 2,
  image: "assets/images/kusur-imzadır.jpg",
  qty: 1,
  unitPrice: 34.99
 },
 {
  id: 3,
  image: "assets/images/suc-ve-ceza.jpg",
  qty: 3,
  unitPrice: 23.99
 },
];

const basketTable = document.querySelector("#basket-table");
console.log(basketTable);

const createBasketItems = (kitap) => {
 let satirHtml = `<tr class="tr-centered">
<td>
  <a href="./detail.html">
    <img
      src="${kitap.image}"
      class="book-img"
      alt="..."
  /></a>
</td>
<td class="unit-price">
  ${kitap.qty}
  <div class="d-flex flex-column ms-3">
    <i class="fa-solid fa-angle-up increase-decrease-btn" onclick="increaseQtyToBook(${kitap.id})"></i>
    <i class="fa-solid fa-angle-down increase-decrease-btn"></i>
  </div>
</td>
<td>${kitap.unitPrice} TL</td>
<td>${(kitap.unitPrice * kitap.qty).toFixed(2)} TL</td>
</tr>`;
 basketTable.children[1].insertAdjacentHTML("beforeend", satirHtml);
}

const listBasketItems = () => {
 Kitaplar.forEach(book => {
  createBasketItems(book);
 });
}

const increaseQtyToBook = (selectedId) => {
 index = Kitaplar.findIndex(item => item.id == selectedId);
 Kitaplar[index].qty += 1;
 basketTable.children[1].innerHTML = "";
 listBasketItems();
}


listBasketItems();