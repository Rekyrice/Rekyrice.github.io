// 等待整个页面的HTML加载完成后再执行脚本
document.addEventListener('DOMContentLoaded', () => {

    // 找到ID为 "avatar" 的元素 (也就是我们的头像)
    const avatar = document.getElementById('avatar');

    // 为头像添加一个点击事件
    avatar.addEventListener('click', () => {
        // 当头像被点击时，弹出一个可爱的提示框
        alert('嘿！不许戳我的脸啦！ (｡>ω<｡)');
    });

});