// checkout.js



function placeOrder() {
    // 這裡可以添加確認結帳的相應邏輯
    console.log('確認結帳按鈕被點擊');
}

function login() {
    window.location.href = './login.html';
}
function register() {
    window.location.href = './login.html';
}



function placeOrder() {

    window.alert("訂單已成功購買！感謝您的購物。");
    window.location.href = "./membership.html";
    // 不知為何在github顯示出來的結果是window.open("./membership.html");
}

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