let cart = [];
let total = 0;

function addToCart(item, price) {
    cart.push({ item, price });
    total += price;
    updateCart();
}

function updateCart() {
    const cartElement = document.getElementById('cart');
    const totalElement = document.getElementById('total');
    
    cartElement.innerHTML = '';
    cart.forEach(({ item, price }, index) => {
        const li = document.createElement('li');
        li.textContent = `${item} - Rp ${price}`;
        cartElement.appendChild(li);
    });

    totalElement.textContent = total;
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
    } else {
        alert(`Thank you for your purchase! Total amount: Rp ${total}`);
        cart = [];
        total = 0;
        updateCart();
    }
}
