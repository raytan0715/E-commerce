// 顯示 cookie 彈窗
const popup = document.getElementById('cookie-popup');
const acceptBtn = document.querySelector('.accept-cookies')
const showCookiePopup = () => {
  popup.style.display = 'block';
}

// 隱藏彈窗且設置 cookie
const acceptCookies = () => {
  popup.style.display = 'none';
  //document.cookie =;設置cookie，麻煩後端的人來弄了
}

// 檢查是否已經同意過cookie，如果沒有，則顯示彈跳窗
const checkCookieConsent = () => {
  if (document.cookie.indexOf("acceptedCookies=true") === -1) {
    showCookiePopup();
  }
}

// 頁面載入時檢查cookie同意狀況
window.addEventListener('load', checkCookieConsent)
acceptBtn.addEventListener('click', acceptCookies)