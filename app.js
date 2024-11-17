document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.getElementById("search-btn");
    const searchField = document.getElementById("search-field");
    const resultDiv = document.getElementById("result");

    searchButton.addEventListener("click", () => {
        const query = encodeURIComponent(searchField.value.trim());

        fetch(`superheroes.php?query=${query}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.text();
            })
            .then((data) => {
                resultDiv.innerHTML = data;
            })
            .catch((error) => {
                console.error("There was a problem with the fetch operation:", error);
                resultDiv.innerHTML = "<p>There was an error processing your request.</p>";
            });
    });
});
