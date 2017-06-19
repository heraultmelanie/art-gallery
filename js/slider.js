var index = 0;
var next = document.querySelector('div.mg-next');
var prev = document.querySelector('div.mg-prev');
var ul = document.querySelector('div.mg-slider>ul');

next.addEventListener('click', function(){
	index++;
	ul.style.left = -1240 * index + 'px';
	console.log(index);
	if (index === 4) {
		index = 0;
		ul.style.left = '0';
	}
});

prev.addEventListener('click', function(){
	if (index <= 0) {
		index = 4;
		ul.style.right = '-3720px';
	}
	index = index - 1;
	console.log(index)
	ul.style.left = -1240 * index + 'px';
});