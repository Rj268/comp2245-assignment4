document.getElementById('search-btn').addEventListener('click', () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'superheroes.php', true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            alert(xhr.responseText); // Display the response as an alert
        } else {
            console.error('An error occurred');
        }
    };

    xhr.onerror = function () {
        console.error('Request failed');
    };

    xhr.send();
});
