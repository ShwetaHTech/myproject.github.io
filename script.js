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
// navbar js end here *******************************************************************************


//for story view
function viewStory(imgElement) {
    let storyId = imgElement.getAttribute("data-id");
    window.location.href = `story.html?id=${storyId}`;
}
document.addEventListener("DOMContentLoaded", function () {
    fetch("stories.json") // JSON file fetch kar raha hai
        .then(response => response.json())
        .then(stories => {
            let images = document.querySelectorAll("img[data-id]");

            images.forEach(img => {
                let story = stories.find(st => st.id == img.getAttribute("data-id"));
                if (story) {
                    img.src = story.image; // JSON se image load karna
                    img.alt = story.title;
                    img.addEventListener("click", function () {
                        window.location.href = `story.html?id=${story.id}`;
                    });
                }
            });
        })
        .catch(error => console.error("Error loading stories:", error));
});

// for images arrow js
let currentIndex = 8; // Pehli 8 images visible rahengi
const stories = document.querySelectorAll(".story");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

document.getElementById("next").addEventListener("click", function () {
    if (currentIndex < stories.length) {
        stories[currentIndex].classList.remove("hidden");
        currentIndex++;
    }
    if (currentIndex > 8) {
        prevButton.classList.remove("hidden"); // 9th image dikhne ke baad Previous button show hoga
    }
    if (currentIndex === stories.length) {
        nextButton.classList.add("hidden"); // 10th image ke baad Next button hide ho jayega
    }
});

document.getElementById("prev").addEventListener("click", function () {
    if (currentIndex > 8) {
        currentIndex--;
        stories[currentIndex].classList.add("hidden");
    }
    if (currentIndex === 8) {
        prevButton.classList.add("hidden"); // Agar wapas 8th image par aaye, toh Previous button hide hoga
    }
    nextButton.classList.remove("hidden"); // Jab piche jayenge toh Next button dikhana hai
});

//end of the arrow js