document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.getElementById("search-btn");

    searchButton.addEventListener("click", () => {
        fetch("superheroes.php")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.text();
            })
            .then((data) => {
                const formattedData = `<ul>${data}</ul>`;
                alert(formattedData);
            })
            .catch((error) => {
                console.error("There was a problem with the fetch operation:", error);
            });
    });
});
