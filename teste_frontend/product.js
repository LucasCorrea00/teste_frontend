const productDetails = document.getElementById('product-details');
const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get('id'));
const product = products.find(p => p.id === productId);

if (product) {
    productDetails.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="product-info">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p class="original-price">R$ ${product.originalPrice ? product.originalPrice.toFixed(2) : ''}</p>
            <p class="discounted-price">R$ ${product.price.toFixed(2)}</p>
            <p class="payment-info">à vista no PIX</p>
            <div class="product-buttons">
                <button class="buy-button" onclick="buyNow(${product.id})">COMPRAR</button>
                <button class="cart-button" onclick="addToCart(${product.id})">ADICIONAR AO CARRINHO</button>
            </div>
        </div>
    `;
}

function buyNow(productId) {
    // Implemente a lógica para comprar o produto diretamente
    console.log(`Comprar agora o produto ${productId}`);
}

function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = products.find(p => p.id === productId);

    if (product) {
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log(`Produto ${productId} adicionado ao carrinho`);
    }
}