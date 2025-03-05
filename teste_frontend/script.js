const logitechProducts = document.getElementById('logitech-products');
const videoCards = document.getElementById('video-cards');

products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    let priceDisplay = `R$ ${product.price.toFixed(2)}`;
    if (product.originalPrice) {
        priceDisplay = `R$ ${product.originalPrice.toFixed(2)}<br>R$ ${product.price.toFixed(2)}`;
    }

    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>${priceDisplay}</p>
        <p>${product.discount || ''}</p>
        <button onclick="addToCart(${product.id})">COMPRAR</button>
        <a href="product.html?id=${product.id}">Ver Detalhes</a>
    `;

    if (product.id <= 4) {
        logitechProducts.appendChild(productCard);
    } else {
        videoCards.appendChild(productCard);
    }
});

function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = products.find(p => p.id === productId);

    if (product) {
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log(`Produto ${productId} adicionado ao carrinho`);
    }
}