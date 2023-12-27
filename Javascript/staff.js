detailComment.addEventListener('click', (e) => {
    const view = document.querySelector('.view')
    const feedback = document.querySelector('.feedback')
    if (e.target.className.includes('product')) {
      feedback.style.display = "none";
      view.style.display = "block";
    }
    if (e.target.className.includes('order')) {
      feedback.style.display = "block";
      view.style.display = "none";
    }
  })