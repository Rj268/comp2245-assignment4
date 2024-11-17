document.getElementById('search-btn').addEventListener('click', () => {
    const searchField = document.getElementById('search-field').value.trim();
    const xhr = new XMLHttpRequest();

    xhr.open('GET', `superheroes.php?query=${encodeURIComponent(searchField)}`, true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            document.getElementById('result').innerHTML = xhr.responseText;
        } else {
            console.error('An error occurred');
        }
    };

    xhr.onerror = function () {
        console.error('Request failed');
    };

    xhr.send();
});
