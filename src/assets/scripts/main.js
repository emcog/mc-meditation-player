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


	
// clickable slider
const progressBar = document.getElementById('song-played-progress').addEventListener('click', function(e){
	let offset = this.getBoundingClientRect();
	let x = e.pageX - offset.left;

	Amplitude.setSongPlayedPercentage((parseFloat(x)/parseFloat(this.offsetWidth))*100);
})

const tracks = document.querySelectorAll('.audio-track__name');

tracks.forEach(track => track.addEventListener('mousedown', playTrack));
// tracks.forEach(tav => tab.addEventListener('touchstart', playTrack));

function playTrack() {
	console.log(this.dataset.amplitudeSongIndex);
	Amplitude.playSongAtIndex(this.dataset.amplitudeSongIndex);
}


	Amplitude.init({
		"songs": [
		{
			"name": "Three-step reset",
			"artist": "Mark Leonard",
			"album": "MBOE Meditations",
			"url": "/assets/meditations/three-step-reset.mp3"
		},
		{
			"name": "Bodyscan",
			"artist": "Mark Leonard",
			"album": "MBOE Meditations",
			"url": "/assets/meditations/bodyscan.mp3"
		},
		{
			"name": "Posture and breath",
			"artist": "Mark Leonard",
			"album": "MBOE Meditations",
			"url": "/assets/meditations/posture-and-breath.mp3"
		},
		{
			"name": "Stretching and sitting",
			"artist": "Mark Leonard",
			"album": "MBOE Meditations",
			"url": "/assets/meditations/stretching-and-sitting.mp3"
		},
		{
			"name": "Mindfulness of feelings",
			"artist": "Mark Leonard",
			"album": "MBOE",
			"url": "/assets/meditations/mindfulness-of-feelings.mp3"
		},
		{
			"name": "Concentration and allowing the mind to wander",
			"artist": "Mark Leonard",
			"album": "MBOE",
			"url": "/assets/meditations/concentration-and-allowing-the-mind-to-wander.mp3"
		}
	],

	continue_next: false,
	debug: true

	});