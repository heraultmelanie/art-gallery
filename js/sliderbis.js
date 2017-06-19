var indexBis = 0;
var nextBis = document.querySelector('div.mg-next-artist');
var prevBis = document.querySelector('div.mg-prev-artist');
var ulBis = document.querySelector('div.mg-slider-artist>ul');

nextBis.addEventListener('click', function(){
	indexBis++;
	ulBis.style.left = -768 * indexBis + 'px';
	console.log(indexBis);
	if (indexBis === 4) {
		indexBis = 0;
		ulBis.style.left = '0';
	}
});

prevBis.addEventListener('click', function(){
	if (indexBis <= 0) {
		indexBis = 4;
		ulBis.style.right = '-3072px';
	}
	indexBis = indexBis - 1;
	console.log(indexBis)
	ulBis.style.left = -768 * indexBis + 'px';
});