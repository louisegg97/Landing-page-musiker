var play= document.querySelector('#play'),
	pause= document.querySelector('#pause'),
	video= document.querySelector('video');

play.addEventListener('click', function(){
	video.play();
});

pause.addEventListener('click', function(){
	video.pause();
});
