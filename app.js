const toggle = document.querySelector('.sidebar-toggle');
const cross = document.querySelector('.close-btn');
const sideBar = document.querySelector('.sidebar');

function closeSidebar() {
    sideBar.classList.toggle('hide')
}

toggle.addEventListener('click',closeSidebar)
cross.addEventListener('click',closeSidebar)