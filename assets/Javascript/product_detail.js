const imageOptions = document.getElementById('image-options')
const main = document.getElementById('main')
const submitForm = document.getElementById('submit-form')
const detailComment = document.getElementById('detail-comment')
const input = document.querySelector('.product-quantity')

let quantity = 1

/*購物車資料放在 localstorage裡 */
/*網頁開發人員工具裡面的 應用程式(application)裡的儲存空間 */
/*https://ithelp.ithome.com.tw/articles/10220513*/

/*事件監聽器，更改圖片 */
imageOptions.addEventListener('click', (e) => {
  main.innerHTML = `
    <img src=${e.target.dataset.img} alt="" class="main-image">
  `
})

/*設定id */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

submitForm.addEventListener('click', (e) => {
  if (e.target.className.includes('add')) {
    quantity++
    input.value= quantity
  }
  if (quantity > 1 && e.target.className.includes('minus')) {
    quantity--
    input.value= quantity
  }
  if (e.target.className.includes('submit-button')) {
    e.preventDefault();
    input.value = 1; /*初始化 */
    const name = document.querySelector('.product-title').textContent;
    const price = Number(document.querySelector('.product-price').textContent);
    const image = document.querySelector('.main-image').getAttribute('src');
    const product = { id: getRandomInt(1, 1000000000), name, price, image, quantity };
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.href = `./cart.html`;
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
var loginManager = {
  isLoggedIn: localStorage.getItem('isLoggedIn') === 'true' || false,
  toggleLoginStatus: function () {
      this.isLoggedIn = !this.isLoggedIn;
      localStorage.setItem('isLoggedIn', this.isLoggedIn); // 將登入狀態保存到 localStorage
      this.updateLinkDisplay();
  },
  updateLinkDisplay: function () {
      var logoutLink = document.getElementById("logoutLink");
      var loginLink = document.getElementById("loginLink");

      if (this.isLoggedIn) {
          logoutLink.style.display = "block";
          loginLink.style.display = "none";
      } else {
          logoutLink.style.display = "none";
          loginLink.style.display = "block";
      }
  }
};

// 在頁面載入時更新連結顯示
document.addEventListener("DOMContentLoaded", function () {
  loginManager.updateLinkDisplay();
});

// 切換登入狀態的函數
function toggleLoginStatus() {
  loginManager.toggleLoginStatus();
}