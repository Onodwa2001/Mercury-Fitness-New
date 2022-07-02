let cardWarpper = document.querySelector(".store");
let successMessage = document.getElementById('success-message');

const products = [
    {name: "Nutritech 1kg", price: 470, btnID: "ios", img: "whey.jpg"},
    {name: "USN 200g", price: 180, btnID: "sam", img: "usn.png"},
    {name: "USN 120 tablets", price: 220, btnID: "hua", img: "usn.jpg"},
    {name: "Gorrilla 4kg", price: 380, btnID: "xao", img: "gorrilla.jpg"},
    {name: "Centrum 30 tablets", price: 140, btnID: "cen", img: "centrum.jpg"},
    {name: "Purefit 800g", price: 140, btnID: "pure", img: "purefit.jpg"},
]


products.forEach((value, index, arr) => {
    cardWarpper.innerHTML += `<div class="product">
        <img src="images/store-items/${value.img}" width="100%" height="280px" alt="">
        <div class="item-description">
            <p>ZAR ${value.price}</p>
            <p>${value.name}</p>
            <button id="${value.btnID}">add to cart</button>
        </div>
        </div>`;
});

// onclick="activatePopup()"

let counter = 0;
let key = `product_${Math.random() * 1000000}`;

for (let i = 0; i < products.length; i++) {
    document.getElementById(products[i].btnID).addEventListener('click', (e) => {
        products[i].btnID = key;
        localStorage.setItem(key, JSON.stringify(products[i]));
        // localStorage.setItem('key_variable', key);
        key = `product_${Math.random() * 1000000}`;
        //location.reload();
        window.scrollTo({top: 0});
        successMessage.style.display = "flex";
        setTimeout(() => {
            successMessage.style.display = "none";
            successMessage.style.transition = "0.2s";
        }, 4000);
    });
}

document.getElementById('counter-cart-items').innerHTML = localStorage.length;
