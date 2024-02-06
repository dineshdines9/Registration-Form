const scriptURL = 'https://script.google.com/macros/s/AKfycbwp3CB7Vc9-fr1yNTteW2uxRGqS4R1ctUEWCv_kkFqe2jlwJOdV5CbVBptZQioc8_GV/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thanks for Registering to Eprozyne-2k24." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})