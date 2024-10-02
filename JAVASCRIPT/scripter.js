console.log(window.location.href); // To see current page URL
console.log('Fetching:', 'HTML/main.html');

fetch('HTML/main.html')
   .then(response => {
       if (!response.ok) {
           throw new Error(`HTTP error! status: ${response.status}`);
       }
       return response.text();
   })
   .then(data => {
       document.getElementById('example').innerHTML = data;
   })
   .catch(error => {
       console.error('Error fetching main.html:', error);
   });

fetch('HTML/header.html')
   .then(response => {
       if (!response.ok) {
           throw new Error(`HTTP error! status: ${response.status}`);
       }
       return response.text();
   })
   .then(data => {
       document.getElementById('headers').innerHTML = data;
   })
   .catch(error => {
       console.error('Error fetching header.html:', error);
   });
