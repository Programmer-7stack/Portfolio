// JavaScript function to show an alert message
function showMessage() {
    alert('Ju nuk keni para që ta bleni këtë produkt');
}


// Funksioni për kërkimin e produkteve
function searchProducts() {
    var searchInput = document.getElementById("searchInput").value.toLowerCase(); // Merr tekstin e kërkimit dhe e bën të vogël
    var productCards = document.querySelectorAll(".product-card"); // Merr të gjitha produktet

    productCards.forEach(function(card) {
        var productName = card.getAttribute("data-name").toLowerCase(); // Merr emrin e produktit
        if (productName.includes(searchInput)) {
            card.style.display = "block"; // Nëse emri i produktit përmban tekstin e kërkuar, shfaq produktin
        } else {
            card.style.display = "none"; // Ndryshe, fshi produktin
        }
    });
}