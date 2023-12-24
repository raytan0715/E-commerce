function loginForm() {
    var email = document.getElementById("loginemail").value;
    var user_password = document.getElementById("loginpassword").value;

    if (!email || !user_password) {
        alert("欄位不可空白。");
    } else {
        alert("登入成功");
        window.location.href('staff.html');
    }
}