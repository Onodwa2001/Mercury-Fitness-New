let prods = [];
let balance = 0;

//let clearVar = document.getElementById('clear');

for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i).startsWith('product')) {
        let eachKey = JSON.parse(localStorage.getItem(localStorage.key(i)));
        console.log(eachKey);

        document.querySelector('.cart').innerHTML += `<div class="cart-item" id="cart-item">
            <p>${eachKey.name}</p>
            <p>ZAR ${eachKey.price}</p>
            <button class="remove-btn" id="${eachKey.btnID}">remove</button>
            </div>`;
        prods.push(eachKey);
        balance += eachKey.price;
    }
}

for (let i = 0; i < prods.length; i++) {
    let eachKey = prods[i];

    document.getElementById(`${eachKey.btnID}`).addEventListener('click', (e) => {
        localStorage.removeItem(localStorage.key(i));
        location.reload();
    });
}

//clearVar.addEventListener('click', (e) => {
//    localStorage.clear();
//    location.reload();
//});

//document.querySelector('#balance').innerHTML += balance;

document.getElementById('total_value').innerHTML = prods.length;
document.getElementById('balance_value').innerHTML = balance;

