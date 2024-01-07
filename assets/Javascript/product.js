function getVisitorCount() {
              var xhttp = new XMLHttpRequest();
              xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                  document.getElementById("visitorCount").innerHTML = this.responseText;
                }
              };
              xhttp.open("GET", "showCounter.jsp", true);
              xhttp.send();
            }
        
// 每次網頁載入完成時都增加訪客計數
window.onload = function() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        // 在增加訪客計數後重新獲取並顯示計數
        getVisitorCount();
    }
    };
    xhttp.open("POST", "increaseCounter.jsp", true);
    xhttp.send();
};
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