const view = document.querySelector('.view');
const feedback = document.querySelector('.feedback');

document.querySelector('.link.merchandise').addEventListener('click', () => {
  feedback.style.display = 'none';
  view.style.display = 'block';
});

document.querySelector('.link.search').addEventListener('click', () => {
  feedback.style.display = 'block';
  view.style.display = 'none';
});