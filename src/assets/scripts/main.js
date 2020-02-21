// play pause
var playPauseBtn = document.getElementbyId('amplitude-play-pause');

playPauseBtn.addEventListener('mousedown', playPause);
playPauseBtn.addEventListener('touchstart', playPause);

function playPause() {
	if(this.classList.contains('player_is-playing')) {
		this.classList.remove('player_is-playing');
	} else {
		this.classList.add('player_is-playing');
	}
}