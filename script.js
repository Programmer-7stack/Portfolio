function showMessage() {
    const modal = document.getElementById("cardModal");
    modal.style.display = "flex"; // Show the modal
}

function closeModal() {
    const modal = document.getElementById("cardModal");
    modal.style.display = "none"; // Hide the modal
}

function processPayment(event) {
    event.preventDefault();
    alert("Blerja e produktit është kryer me sukses!");
    closeModal(); // Close the modal after payment
}
