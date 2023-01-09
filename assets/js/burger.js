const menu = document.querySelector(".menu-burger--area")

const active = () => menu.classList.toggle('active')

menu.addEventListener('click', active)