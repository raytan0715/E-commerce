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
  },
  loginForm: function () {
      var email = document.getElementById("loginemail").value;
      var user_password = document.getElementById("loginpassword").value;

      if (!email || !user_password) {
          alert("欄位不可空白。");
          return false;
      } else {
          alert("登入成功");
          this.toggleLoginStatus();
          window.location.href = "./membership.html";
          return false;
      }
  },
  cancel: function () {
      var isConfirmed = window.confirm("您確定是否要退出？");

      if (isConfirmed) {
          alert("掰掰");
          window.location.href = "./index.html";
          this.toggleLoginStatus(); // 在取消時也更新登入狀態
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
  loginManager.updateLinkDisplay(); // 在切換登入狀態時同步更新 nav 的顯示
}

// 處理登入表單提交的函數
function loginForm() {
  return loginManager.loginForm();
}

// 處理取消按鈕點擊的函數
function cancel() {
  loginManager.cancel();
}
