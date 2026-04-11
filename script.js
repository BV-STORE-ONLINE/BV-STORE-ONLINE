// ================= CARRITO =================
let cartCount = 0;

function addToCart() {
    cartCount++;
    document.getElementById("cart-count").innerText = cartCount;
}

// ================= SCROLL SUAVE =================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if (destino) {
            destino.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// ================= ANIMACIÓN BOTÓN =================
window.addEventListener("load", () => {
    const btn = document.querySelector(".btn-banner");

    if (btn) {
        btn.style.opacity = "0";
        btn.style.transform = "translateX(-50%) translateY(20px)";

        setTimeout(() => {
            btn.style.transition = "0.5s";
            btn.style.opacity = "1";
            btn.style.transform = "translateX(-50%) translateY(0)";
        }, 300);
    }
});
