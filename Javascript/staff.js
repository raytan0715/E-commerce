document.addEventListener('click', (e) => {
  const merchandise = document.querySelector('.staff-product');
  const search = document.querySelector('.staff-order');

  if (e.target.classList.contains('product')) {
    merchandise.style.display = "none";
    search.style.display = "block";
  }

  if (e.target.classList.contains('search')) {
    merchandise.style.display = "block";
    search.style.display = "none";
  }
});
