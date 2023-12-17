const imageOptions = document.getElementById('image-options')
const main = document.getElementById('main')
const submitForm = document.getElementById('submit-form')
const detailComment = document.getElementById('detail-comment')
const input = document.querySelector('.product-quantity')

let quantity = 1

imageOptions.addEventListener('click', (e) => {
  main.innerHTML = `
    <img src=${e.target.dataset.img} alt="" class="main-image">
  `
})

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

submitForm.addEventListener('click', (e) => {
  if (e.target.className.includes('add')) {
    quantity++
    input.textContent = quantity
  }
  if (quantity > 1 && e.target.className.includes('minus')) {
    quantity--
    input.textContent = quantity
  }
  if (e.target.className.includes('submit-button')) {
    e.preventDefault()
    const name = document.querySelector('.product-title').textContent
    const price = Number(document.querySelector('.product-price').textContent)
    const image = document.querySelector('.main-image').getAttribute('src')
    const product = { id: getRandomInt(1, 1000000000), name, price, image, quantity }
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.push(product)
    localStorage.setItem('cart', JSON.stringify(cart))
    window.location.href = `cart.html`
  }
})

detailComment.addEventListener('click', (e) => {
  const view = document.querySelector('.view')
  const feedback = document.querySelector('.feedback')
  if (e.target.className.includes('product-comment')) {
    feedback.style.display = "none";
    view.style.display = "block";
  }
  if (e.target.className.includes('write-comment')) {
    feedback.style.display = "block";
    view.style.display = "none";
  }
})

window.addEventListener('pageshow', () => {
  console.log('pageshow');
})