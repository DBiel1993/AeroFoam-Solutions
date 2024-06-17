document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('change', function () {
        if (menuToggle.checked) {
            menu.style.display = 'flex';
        } else {
            menu.style.display = 'none';
        }
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            menu.style.display = 'flex';
        } else if (!menuToggle.checked) {
            menu.style.display = 'none';
        }
    });
});