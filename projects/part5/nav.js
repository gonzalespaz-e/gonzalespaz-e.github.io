const navToggle = document.getElementById('nav-toggle');
const headerNav = document.getElementById('header-nav');

navToggle.addEventListener('click', function () {
    headerNav.classList.toggle('hidden');
});
