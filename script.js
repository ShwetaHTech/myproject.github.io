function openNewPage() {
    window.location.href = "viewAllPopularStories";
}
function openNewPage() {
    window.location.href = "viewAll";
}



// Get modal elements
const modal = document.getElementById("storyModal");
const modalText = document.getElementById("storyText");
const closeModal = document.querySelector(".close");

// Sabhi images pe click event lagana
document.querySelectorAll(".story-img").forEach(img => {
    img.addEventListener("click", function() {
        const story = this.getAttribute("data-story"); // Story text le raha hai
        modalText.innerText = story;
        modal.style.display = "block"; // Modal dikhaye
    });
});

// Modal close button
closeModal.addEventListener("click", function() {
    modal.style.display = "none";
});

// Modal ko background pe click karke close karne ka option
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
