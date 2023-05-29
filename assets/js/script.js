const form = document.getElementById('formUrl');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const getVal = (id) => document.getElementById(id).value;
    let url = getVal('url');
    let api = `https://tiktok-dl-api.libyzxy0.repl.co/download?url=${url}`;
    fetch(api)
  .then(response => response.json())
  .then(data => {
    // Process the response data
    window.location.href = data.url;
  })
  .catch(error => {
    // Handle any errors that occur during the request
    console.error('Error:', error);
  });

})
