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