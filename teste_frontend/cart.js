const cartItems = document.getElementById('cart-items');
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function displayCart() {
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" style="max-width: 100px;">
            <p>${item.name} - R$ ${item.price.toFixed(2)}</p>
            <button onclick="removeFromCart(${item.id})">Remover</button>
        `;
        cartItems.appendChild(cartItem);
    });
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

displayCart();