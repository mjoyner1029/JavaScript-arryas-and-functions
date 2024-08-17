// Shopping Cart Simulation

// Simulating a user login status
let isLoggedIn = true; // Change to false to test the logged-out state

// List of available products
const products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Smartphone", price: 500 },
    { id: 3, name: "Headphones", price: 100 }
];

// Cart to store added products
let cart = [];

// Function to display available products
function displayProducts() {
    const productsList = document.getElementById('products-list');
    productsList.innerHTML += '<ul id="products"></ul>';
    const productsUl = document.getElementById('products');
    products.forEach(product => {
        const productLi = document.createElement('li');
        productLi.className = 'product';
        productLi.innerHTML = `${product.name} - $${product.price} <button onclick="addToCart(${product.id})">Add to Cart</button>`;
        productsUl.appendChild(productLi);
    });
}

// Function to display cart items
function displayCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.innerHTML += '<ul id="cart-items"></ul>';
    const cartUl = document.getElementById('cart-items');
    cart.forEach(item => {
        const cartItemLi = document.createElement('li');
        cartItemLi.className = 'cart-item';
        cartItemLi.textContent = `${item.name} - $${item.price}`;
        cartUl.appendChild(cartItemLi);
    });
}

// Function to display total cost
function displayTotalCost() {
    const totalCostDiv = document.getElementById('total-cost');
    totalCostDiv.innerHTML += `<p>Total Cost: $${calculateTotalCost()}</p>`;
}

// Task 1: Check if the user is logged in
function addToCart(productId) {
    if (isLoggedIn) {
        const product = products.find(p => p.id === productId);
        if (product) {
            cart.push(product);
            updateCart();
            console.log(`${product.name} added to cart.`);
        } else {
            console.log("Product not found.");
        }
    } else {
        console.log("User is not logged in. Please log in to add items to the cart.");
    }
}

// Function to update cart display
function updateCart() {
    const cartUl = document.getElementById('cart-items');
    cartUl.innerHTML = ''; // Clear existing cart items
    displayCart(); // Redisplay cart items
    displayTotalCost(); // Update total cost
}

// Function to calculate the total cost of items in the cart
function calculateTotalCost() {
    return cart.reduce((total, product) => total + product.price, 0);
}

// Initialize the page by displaying products and setting up event listeners
function initializePage() {
    displayProducts();
    document.getElementById('checkout-button').addEventListener('click', () => {
        if (cart.length > 0) {
            alert(`Thank you for your purchase! Your total is $${calculateTotalCost()}`);
            cart = []; // Empty the cart
            updateCart();
        } else {
            alert("Your cart is empty.");
        }
    });
}

// Run the initialization function when the page loads
initializePage();
