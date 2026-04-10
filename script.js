// ================= CARRITO =================

// contador del carrito
let cartCount = 0;

// función para agregar productos (se usará después en parte 4)
function addToCart() {
    cartCount++;
    document.getElementById("cart-count").innerText = cartCount;
}
