document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartPreviewItems = document.getElementById('cart-preview-items');
    const cartTotalElement = document.getElementById('cart-total');
    const cartModal = new bootstrap.Modal(document.getElementById('cartModal'));
    const cartModalBody = document.getElementById('cart-modal-body');
    const cartModalTotalElement = document.getElementById('cart-modal-total');
    const openCartModalButton = document.getElementById('open-cart-modal');
    const cartContainer = document.getElementById('cart-container');

    let cart = JSON.parse(localStorage.getItem('cart') || '[]');

    updateCartPreview();

    function updateCartPreview() {
        cartPreviewItems.innerHTML = '';
        let totalPrice = 0;

        if (cart.length === 0) {
            cartPreviewItems.innerHTML = '<p>Корзина пуста.</p>';
        } else {
            cart.forEach((item) => {
                const itemElement = document.createElement('p');
                itemElement.textContent = `${item.name} x${item.quantity} - ${item.price * item.quantity}руб`;
                cartPreviewItems.appendChild(itemElement);
                totalPrice += item.price * item.quantity;
            });
        }
        cartTotalElement.textContent = totalPrice.toFixed(2);
    }

    function addToCart(event) {
        const menuItem = event.target.closest('.menu-item');
        const itemId = menuItem.dataset.id;
        const itemName = menuItem.dataset.name;
        const itemPrice = parseFloat(menuItem.dataset.price);
        const itemImage = menuItem.dataset.image;

        let itemInCart = cart.find(item => item.id === itemId);
        if (itemInCart) {
            itemInCart.quantity += 1;
        } else {
            cart.push({
                id: itemId,
                name: itemName,
                price: itemPrice,
                quantity: 1,
                image: itemImage,
            });
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartPreview();
    }

    function updateCartModal() {
        cartModalBody.innerHTML = '';
        let totalPrice = 0;

        if (cart.length === 0) {
            cartModalBody.innerHTML = '<p>Корзина пуста.</p>';
        } else {
            cart.forEach((item) => {
                const itemElement = document.createElement('div');
                itemElement.classList.add('cart-item');
                totalPrice += item.price * item.quantity;

                itemElement.innerHTML = `
                    <div class="cart-item-image">
                        <img src="">
                    </div>
                    <div class="cart-item-details">
                        <p>${item.name}</p>
                        <p>Цена: ${item.price}</p>
                        <p>Количество: <span class="cart-item-quantity">${item.quantity}</span></p>
                        <div class="cart-item-controls">
                            <button class="btn btn-sm btn-secondary decrease-quantity" data-id="${item.id}">-</button>
                            <button class="btn btn-sm btn-secondary increase-quantity" data-id="${item.id}">+</button>
                            <button class="btn btn-sm btn-danger remove-item" data-id="${item.id}">Удалить</button>
                        </div>
                    </div>
                `;

                cartModalBody.appendChild(itemElement);
            });
        }
        cartModalTotalElement.textContent = totalPrice.toFixed(2);
    }

    function removeItemFromCart(itemId) {
        cart = cart.filter(item => item.id !== itemId);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartModal();
        updateCartPreview();
    }

    function increaseQuantity(itemId) {
        cart = cart.map(item => {
            if (item.id === itemId) {
                item.quantity += 1;
            }
            return item;
        });
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartModal();
        updateCartPreview();
    }

    function decreaseQuantity(itemId) {
        cart = cart.map(item => {
            if (item.id === itemId && item.quantity > 1) {
                item.quantity -= 1;
            }
            return item;
        });
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartModal();
        updateCartPreview();
    }

    cartModalBody.addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-item')) {
            removeItemFromCart(event.target.dataset.id);
        } else if (event.target.classList.contains('increase-quantity')) {
            increaseQuantity(event.target.dataset.id);
        } else if (event.target.classList.contains('decrease-quantity')) {
            decreaseQuantity(event.target.dataset.id);
        }
    });

    openCartModalButton.addEventListener('click', (event) => {
        event.preventDefault();
        updateCartModal();
        cartModal.show();
    });

    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });
});