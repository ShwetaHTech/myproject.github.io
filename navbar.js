
// JavaScript to Toggle Dropdown on This is for browse button 
document.getElementById("browseBtn").addEventListener("click", function(event) {
event.preventDefault(); // Prevent default link behavior
document.getElementById("dropdownMenu").classList.toggle("show");
});

// Close dropdown when clicking outside
document.addEventListener("click", function(event) {
let dropdown = document.getElementById("dropdownMenu");
let browseBtn = document.getElementById("browseBtn");

if (!browseBtn.contains(event.target) && !dropdown.contains(event.target)) {
dropdown.classList.remove("show");
}
});
