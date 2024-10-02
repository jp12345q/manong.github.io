fetch('HTML/main.html')
.then(response => response.text())
.then(data => {
    document.getElementById('example').innerHTML = data;
});

fetch('HTML/header.html')
.then(response => response.text())
.then(data => {
    document.getElementById('headers').innerHTML = data;
});