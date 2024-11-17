document.getElementById('search-btn').addEventListener('click', () => {
    console.log('Search button clicked'); // Debug message

    const searchField = document.getElementById('search-field').value.trim();
    console.log('Search query:', searchField); // Log user input

    const xhr = new XMLHttpRequest();
    xhr.open('GET', `superheroes.php?query=${encodeURIComponent(searchField)}`, true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log('Response received:', xhr.responseText); // Log server response
            document.getElementById('result').innerHTML = xhr.responseText;
        } else {
            console.error('An error occurred:', xhr.status); // Log error
        }
    };

    xhr.onerror = function () {
        console.error('Request failed');
    };

    xhr.send();
});
