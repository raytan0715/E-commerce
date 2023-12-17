/*在登入帳號以及註冊帳號轉移*/
function show_hide() {
  var loginContainer = document.getElementById("loginContainer");
  var signupContainer = document.getElementById("signupContainer");

  if (loginContainer.style.display === "block") {
    loginContainer.style.display = "none";
    signupContainer.style.display = "block";
  } else {
    loginContainer.style.display = "block";
    signupContainer.style.display = "none";
  }
}

function loginForm() {
    var email = document.getElementById("loginemail").value;
    var user_password = document.getElementById("loginpassword").value;

    if (email === "" || user_password === "") {
        alert("欄位不可空白。");
        return false;
    } else {
        alert("登入成功");
        window.open('member.jsp');
    }
}

function signupForm() {
  //獲取表單欄位的值。
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var user_password = document.getElementById("password").value;
  var comfirm_password = document.getElementById("comfirm_password").value;

  //判斷表單欄位是否為空。
  if (username==="" || email === "" || user_password === "" || comfirm_password==="") {
    alert("欄位不可空白。");
    return false;
  } else {
    
    alert("註冊成功！");
    window.open('member.jsp');
  }
}

function cancel() {
  // 顯示確認對話框
  var isConfirmed = window.confirm("您確定是否要退出？");

  // 如果使用者點擊了確認按鈕，則執行跳轉
  if (isConfirmed) {
    alert("掰掰");
    window.location.href = "first_page.html";
  }
  else { }
  // 否則不執行跳轉
}