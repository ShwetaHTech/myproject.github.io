document.addEventListener("DOMContentLoaded", function () {
    let params = new URLSearchParams(window.location.search);
    let storyId = params.get("id");

    if (!storyId) {
        document.body.innerHTML = "<h1>No Story Selected</h1>";
        return;
    }

    fetch("stories.json")
        .then(response => response.json())
        .then(data => {
            let stories = data.stories || data;
            let story = stories.find(st => st.id === Number(storyId));

            if (story) {
                document.getElementById("story-title").innerText = story.title;
                document.getElementById("story-image").src = story.image;
                document.getElementById("story-image").alt = story.title;
                document.getElementById("story-summary").innerText = story.summary; // ✅ Summary Fix

                // Local Storage se votes aur reads load karein
                let storedData = JSON.parse(localStorage.getItem(`story_${storyId}`)) || {};
                let votes = storedData.votes || parseInt(story.votes.replace(/\D/g, "")) || 0;
                let reads = storedData.reads || parseInt(story.reads.replace(/\D/g, "")) || 0;

                // Story open hote hi reads increase ho jayenge
                reads++;
                saveToLocalStorage(storyId, votes, reads);

                // document.getElementById("story-reads").innerText = `Reads: ${reads}`;
                // document.getElementById("story-votes").innerText = `Votes: ${votes}`;
                document.getElementById("story-reads").innerText = reads;
                document.getElementById("story-votes").innerText = votes;


                // Vote Button Click Event
                document.getElementById("increase-votes").addEventListener("click", function () {
                    votes++;
                    document.getElementById("story-votes").innerText = `Votes: ${votes}`;
                    saveToLocalStorage(storyId, votes, reads);
                });

            } else {
                document.body.innerHTML = "<h1>Story Not Found</h1>";
            }
        })
        .catch(error => console.error("Error loading story:", error));
});

// Function to save data to localStorage
function saveToLocalStorage(storyId, votes, reads) {
    localStorage.setItem(`story_${storyId}`, JSON.stringify({ votes, reads }));
}
