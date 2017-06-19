// Menu Burger

var menu = document.querySelector('ul.mg-responsiv');
var burger_menu = document.querySelector('img.mg-burger');
var close_burger_menu = document.querySelector('img.mg-close-burger');

burger_menu.addEventListener('click', function(){
	menu.classList.remove('closed');
	this.classList.add('closed');
	close_burger_menu.classList.remove('closed');
});
close_burger_menu.addEventListener('click', function(){
	menu.classList.add('closed');
	this.classList.add('closed');
	burger_menu.classList.remove('closed');
});
