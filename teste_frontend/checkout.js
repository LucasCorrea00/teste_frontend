const checkoutForm = document.getElementById('checkout-form');
checkoutForm.innerHTML = `
    <form>
        <label for="name">Nome:</label>
        <input type="text" id="name" name="name" required><br><br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required><br><br>
        <button type="submit">Finalizar Compra</button>
    </form>
`;

checkoutForm.addEventListener('submit', function(event) {
    event.preventDefault();
    localStorage.removeItem('cart');
    alert('Compra finalizada com sucesso!');
    window.location.href = 'index.html';
});