function loginForm() {
    var email = document.getElementById("loginemail").value;
    var user_password = document.getElementById("loginpassword").value;

    if (!email || !user_password) {
        alert("欄位不可空白。");
    } else {
        alert("登入成功");
        window.open("./staff.html");
        // window.location.href = "./staff.html";
        /*後端要更改位址設定，window.location.herf 在此*/
    }
}
function cancel() {
    // 顯示確認對話框
    var isConfirmed = window.confirm("您確定是否要退出？");
  
    // 如果使用者點擊了確認按鈕，則執行跳轉
    if (isConfirmed) {
      alert("掰掰");
      window.location.href = "./index.html";
    }return
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