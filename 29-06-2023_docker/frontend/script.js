window.addEventListener('DOMContentLoaded', () => {
  const backendResponse = document.getElementById('backend-response');

  fetch('http://localhost:8000')
    .then(response => response.text())
    .then(data => {
      backendResponse.innerText = data;
    });
});