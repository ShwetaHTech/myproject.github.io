document.addEventListener("DOMContentLoaded", function () {
    let searchBox = document.getElementById("searchBox");
    let searchResults = document.getElementById("searchResults");

    fetch("stories.json") // JSON file load karega
        .then(response => response.json())
        .then(stories => {
            searchBox.addEventListener("input", function () {
                let query = searchBox.value.toLowerCase();
                searchResults.innerHTML = "";

                if (query.trim() === "") return; // Agar search empty ho to kuch mat dikhao

                let filteredStories = stories.filter(story =>
                    story.title.toLowerCase().includes(query)
                );

                if (filteredStories.length === 0) {
                    searchResults.innerHTML = "<li>No stories found</li>";
                    return;
                }

                filteredStories.forEach(story => {
                    let li = document.createElement("li");
                    li.innerHTML = `<a href="story.html?id=${story.id}">${story.title}</a>`;
                    searchResults.appendChild(li);
                });
            });
        })
        .catch(error => console.error("Error loading JSON:", error));
});
