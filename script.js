const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
})

let stars = document.getElementById('stars');
let awan1 = document.getElementById('awan1');
let awan2 = document.getElementById('awan2');
let awan3 = document.getElementById('awan3');


window.addEventListener('scroll', () => {
    let value = window.scrollY;
    

    stars.style.left = value * -0.1 + 'px';
    awan1.style.top = value * 0.8 + 'px';
    awan2.style.top = value * 0.4 + 'px';
    awan3.style.top = value * 0.6 + 'px';
});
