
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
