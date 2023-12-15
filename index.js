// let alldivs = document.getElementsByTagName("div");
// alldivs[0].classList.add("alldiv");
// console.log(alldivs);
// let a = document.querySelectorAll("div > div > p");
// a.forEach(e => e.classList.add("div"));
// console.log(a)
// let btn = document.querySelectorAll(".header_flex .contact");

// function addActive(element){
//     element.classList.toggle("active");
// }

// btn.forEach(e => e.addEventListener("click", function(){addActive(e)}))

let menu = [
    {
        title: "Allia salad",
        description: "Description of the item",
        price: "23.00",
        rating: 4.7,
        wishlist: true,
    },
    {
        title: "SSSSS salad",
        description: "Description of the item",
        price: "26.00",
        rating: 4.1,
        wishlist: false,
    },
    {
        title: "WWWAS salad",
        description: "Description of the item",
        price: "29.00",
        rating: 4.2,
        wishlist: true,
    },
    {
        title: "DDDDD salad",
        description: "Description of the item",
        price: "27.00",
        rating: 4.3,
        wishlist: false,
    },
];

let btn = document.querySelectorAll(".btn_load_more");
let cart = document.querySelectorAll(".cart");
let slider = document.querySelectorAll(".slider");

function addDishes(element) {
    slider[0].innerHTML += `<div class="menu_card">
                    <div class="menu_card_content">
                        <div class="manu_cart_whishlist">
                            <img src=${
                                element.wishlist
                                    ? "./img/section3/fi-sr-heart.svg"
                                    : "./img/section3/fi-br-heart.svg"
                            } alt="wishlist">
                        </div>
                        <div class="menu_card_content_img">
                            <img src="./img/section3/Fattoush salad.png" alt="salad">
                        </div>
                        <div class="menu_card_content_title">${
                            element.title
                        }</div>
                        <div class="menu_card_content_desc">${
                            element.description
                        }</div>
                        <div class="menu_card_content_bottom_line">
                            <div class="menu_card_content_meal_price">$${
                                element.price
                            }</div>
                            <div class="menu_card_content_meal_rating">
                                <img src="./img/section1/fi-sr-star.svg" alt="star">
                                <span>${element.rating}</span>
                            </div>
                        </div>
                    </div>
                </div>
    `;
}

function toggleClick() {
    this.parentElement.classList.toggle("active");
}
if (cart[0] !== undefined) {
    cart.forEach((item) => item.addEventListener("click", toggleClick));
}
btn.forEach((e) =>
    e.addEventListener("click", function () {
        menu.forEach((item) => addDishes(item));
    })
);

// 2. Даний рядок типу 'var_text_hello'. Зробіть із нього текст 'VarTextHello'.
let text = "var_text_hello"
    .split("_")
    .map(function (element) {
        return element.charAt(0).toUpperCase() + element.slice(1);
    })
    .join("");
console.log(text);

let names =
    "Вася aasdasdетя asdasndbnabsdn ksndfj sjf sjfj sfj shdj fsdjfh jshdfj hsjfh sj fhj shfj"
        .split("")
        .map(function (i, index, array) {
            if (array[index - 1] == " ") {
                return array[index].toUpperCase().toString();
            } else {
                return i;
            }
        })
        .join("");
console.log(names);

const firstArray = [2, 3, 5, true, null, "text", 5, -1];
const secondArray = [2, 3, 5, true, null, "text", 5, -1];
const thirdArray = [2, 3, 5, false, null, "text", -5, 1000];

function arrayCompare(array1, array2) {
    if (array1.length != array2.length) {
        return false;
    }

    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) return false;
    }
    return true;
}
console.log(arrayCompare(firstArray, secondArray));
console.log(arrayCompare(firstArray, thirdArray));

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    // autoplay: {
    //     // delay: 3500,
    //     // disableOnInteraction: false,
    //   },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // when window width is >= 320px
        420: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        // when window width is >= 480px
        780: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        // when window width is >= 640px
        1140: {
          slidesPerView: 3,
          spaceBetween: 20
        }
      }
});
var mySwiper1 = new Swiper(".mySwiper1", {
    slidesPerView: 3,
    spaceBetween: 40,
    // autoplay: {
    //     // delay: 3500,
    //     // disableOnInteraction: false,
    //   },
    // loop: true,
    pagination: {
        el: ".swiper-pagination1",
        // clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next1",
        prevEl: ".swiper-button-prev1",
    },
    // breakpoints: {
    //     // when window width is >= 320px
    //     420: {
    //       slidesPerView: 1,
    //       spaceBetween: 10
    //     },
    //     // when window width is >= 480px
    //     780: {
    //       slidesPerView: 2,
    //       spaceBetween: 10
    //     },
    //     // when window width is >= 640px
    //     1140: {
    //       slidesPerView: 3,
    //       spaceBetween: 20
    //     }
    //   }
});
