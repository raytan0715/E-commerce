
//carousel輪播圖

let currentSlide = 0;
let slideInterval;

function startCarousel() {
    // 开始轮播，每隔3000毫秒（3秒）切换一次
    slideInterval = setInterval(nextSlide, 3000);
}

function stopCarousel() {
    // 停止轮播
    clearInterval(slideInterval);
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % 5;
    updateSlide();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + 5) % 5;
    updateSlide();
}

function updateSlide() {
    const container = document.querySelector('.container');
    const offset = -currentSlide * 600;
    container.style.transform = 'translateX(' + offset + 'px)';
}

// 在页面加载完成后开始轮播
window.onload = function () {
    startCarousel();
};

// 如果用户与轮播互动，停止轮播
document.querySelector('.carousel').addEventListener('mouseover', stopCarousel);
document.querySelector('.carousel').addEventListener('mouseout', startCarousel);
