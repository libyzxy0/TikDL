
/*
© 2023 libyzxy0
*/
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


document.getElementById('paste-url').addEventListener('click', () => {
    // Check if the browser supports the Clipboard API
if (navigator.clipboard && navigator.clipboard.readText) {
  navigator.clipboard.readText()
    .then(text => {
      document.getElementById('url').value = text;
    })
    .catch(err => {
      console.error("Failed to read clipboard contents:", err);
    });
} else {
  console.error("Clipboard API not supported");
}
})
