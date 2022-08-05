<script>
	import { title, description } from '$lib/data/podcast.json';
	export let podcastClass;

	// https://stackoverflow.com/questions/18146354/how-can-i-cut-a-string-after-x-characters#18146415
	function truncateText(text, length) {
		if (text.length <= length) {
			return text;
		}
		return text.substr(0, length) + '\u2026'
	}

	// find length of text, when more button === true run trunCate text with length of text
	let shortText = 160;
	let bodyCopy = truncateText;
	let fullText = description.length;
	let moreText = false

	function toggleMoreText(){
		moreText ? moreText = false : moreText = true;
	}


</script>
<section class="{podcastClass} border-b-2 pb-6 mb-1" aria-label='summary' >
	<img class="row-span-1 rounded drop-shadow-md"
			 alt="'I relate therefore I am', A portrait of Descartes with a semi-transparent grid of people on top"
			 src="/MBOE-social-mindfulness_cover-1x.jpeg"
			 srcset="/MBOE-social-mindfulness_cover-1x.jpeg 1x,
								/MBOE-social-mindfulness_cover-1halfx.jpeg 1.5x,
								/MBOE-social-mindfulness_cover-3x.jpeg 3x,
								/MBOE-social-mindfulness_cover-4x.jpeg 4x"
	/>
	<div class="row-span-2 mt-3 md:-mt-3">
		<h1>{title}</h1>
		<p class="">{moreText ? bodyCopy(description, fullText) : bodyCopy(description, shortText)}</p>
		<button class="float-right underline text-sm font-sans font-semibold underline-offset-1 decoration-2 {moreText? '-mt-4':'mt-[-51px]'}" on:click='{toggleMoreText}'>{moreText? "Less":"More"}</button>
	</div>
</section>
<style>
</style>