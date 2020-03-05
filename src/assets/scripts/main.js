// ----------> Interactions

const playPauseBtn = document.getElementById('play-pause');

playPauseBtn.addEventListener('click', playPause);
playPauseBtn.addEventListener('touchstart', playPause);

function playPause() {
	if(this.classList.contains('js-amp__is-playing')) {
		this.classList.remove('js-amp__is-playing');
	} else {
		this.classList.add('js-amp__is-playing');
	}
}


function highlightTrack() {
	for (let i = 0; i < tracks.length; i++) {
		tracks[i].classList.remove('js__track_is-active');
	}
	this.classList.add('js__track_is-active');
	console.log('this is ', this);
}



// const trackRow = document.querySelectorAll('.audio-track__name');

const tracks = document.querySelectorAll('.audio-track__name');
// const meditations = document.querySelectorAll('.audio-track__name');

	tracks.forEach(track => track.addEventListener('click', playTrack));
	tracks.forEach(track => track.addEventListener('touchstart', playTrack));

	tracks.forEach(track => track.addEventListener('click', highlightTrack));
	tracks.forEach(track => track.addEventListener('touchstart', highlightTrack));



	function playTrack() {
		console.log(this.dataset.amplitudeSongIndex);
		Amplitude.playSongAtIndex(this.dataset.amplitudeSongIndex);
	}


// clickable slider
let clickableSlider = document.getElementById('song-played-progress').addEventListener('click', function(e){
	let offset = this.getBoundingClientRect();
	let x = e.pageX - offset.left;

	Amplitude.setSongPlayedPercentage((parseFloat(x)/parseFloat(this.offsetWidth))*100);
})


// ----------> Tracks


	Amplitude.init({
		"songs": [
		{
			"name": "Three-step reset",
			"artist": "Mark Leonard",
			"album": "MBOE Meditations",
			"url": "https://d1ymcygi52lphf.cloudfront.net/three-step-reset.mp3"
		},
		{
			"name": "Bodyscan",
			"artist": "Mark Leonard",
			"album": "MBOE Meditations",
			"url": "https://d1ymcygi52lphf.cloudfront.net/bodyscan.mp3"
		},
		{
			"name": "Posture and breath",
			"artist": "Mark Leonard",
			"album": "MBOE Meditations",
			"url": "https://d1ymcygi52lphf.cloudfront.net/posture-and-breath.mp3"
		},
		{
			"name": "Stretching and sitting",
			"artist": "Mark Leonard",
			"album": "MBOE Meditations",
			"url": "https://d1ymcygi52lphf.cloudfront.net/stretching-and-sitting.mp3"
		},
		{
			"name": "Mindfulness of feelings",
			"artist": "Mark Leonard",
			"album": "MBOE",
			"url": "https://d1ymcygi52lphf.cloudfront.net/mindfulness-of-feelings.mp3"
		},
		{
			"name": "Concentration and allowing the mind to wander",
			"artist": "Mark Leonard",
			"album": "MBOE",
			"url": "https://d1ymcygi52lphf.cloudfront.net/concentration-and-wandering-mind.mp3.mp3"
		}
	],

	continue_next: false,
	debug: true
	
	});
	