let cart = JSON.parse(localStorage.getItem('cart')) || []
/*儲存庫拿資料 */

// 購物車
function renderCart() {
    const tbody = document.querySelector('#cart tbody');
    const totalPriceElement = document.querySelector('#total-price');

    tbody.innerHTML = '';

    let total = 0;

    cart.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class='bg_color'>
                <img src="${item.image}" alt="" style="max-width: 50px; max-height: 50px;">
                ${item.name}
            </td>
            <td class='bg_color'>
                <button class="minus" data-id=${item.id}>-</button>
                ${item.quantity}
                <button class="add" data-id=${item.id}>+</button>
            </td>
            <td class='bg_color'>${item.price}</td>
            <td class='bg_color'>${item.price * item.quantity}</td>
            <td class='bg_color'><button data-id=${item.id} class="remove">刪除</button></td>
        `;

        total += item.price * item.quantity;

        tbody.appendChild(row);
    });

    totalPriceElement.textContent = total;
}

const cartContainer = document.getElementById('cart') 
cartContainer.addEventListener('click', (e) => {
  const productIndex = cart.findIndex(item => item.id === Number(e.target.dataset.id))
  if (e.target.className.includes('add')) {
    cart[productIndex].quantity++
  }
  if (cart[productIndex].quantity > 1 && e.target.className.includes('minus')) {
    cart[productIndex].quantity--
  }
  if (e.target.className.includes('remove')) {
    cart = cart.filter(item => item.id !== Number(e.target.dataset.id))
  }
  localStorage.setItem('cart', JSON.stringify(cart))
  renderCart();
})

// 清空
function clearCart() {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart))
    renderCart();
}

function checkout() {
  window.location.href = './checkout.html';
}

renderCart();
/*重新渲染資料 */
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