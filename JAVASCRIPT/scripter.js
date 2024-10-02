fetch('/HTML/main.html')
.then(Response => Response.text())
.then(data => {
    document.getElementById('example').innerHTML = data;
});

fetch('/HTML/header.html')
.then(Response => Response.text())
.then(data => {
    document.getElementById('headers').innerHTML = data;
});