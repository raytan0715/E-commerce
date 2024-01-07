
function toggleEditForm() {
  var editForm = document.querySelector('.edit-form');
  editForm.style.display = editForm.style.display === 'none' ? 'block' : 'none';
}

function saveChanges() {
  // 獲取編輯表單中的值
  var editedName = document.getElementById('editName').value;
  var editedDob = document.getElementById('editDob').value;
  var editedPhone = document.getElementById('editPhone').value;
  var editedAddress = document.getElementById('editAddress').value;
  var editedEmail = document.getElementById('editEmail').value;
  // 更新前端顯示的資料
  document.getElementById('name').textContent = editedName;
  document.getElementById('dob').textContent = editedDob;
  document.getElementById('phone').textContent = editedPhone;
  document.getElementById('address').textContent = editedAddress;
  document.getElementById('email').textContent = editedEmail;
  //在這裡設定更新資料到後端資料庫的js
  
  //把修改資料的按鈕隱藏
  toggleEditForm();
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
