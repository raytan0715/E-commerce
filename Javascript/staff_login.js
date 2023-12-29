function loginForm() {
    var email = document.getElementById("loginemail").value;
    var user_password = document.getElementById("loginpassword").value;

    if (!email || !user_password) {
        alert("欄位不可空白。");
    } else {
        alert("登入成功");
        window.open("./staff.html");
        // window.location.href = "membership.html";
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