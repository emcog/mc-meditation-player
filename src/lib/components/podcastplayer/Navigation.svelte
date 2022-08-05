<script context="module">
	import { episodes } from '$lib/data/podcast.json';
	// import Button from '../Button.svelte';
	import LinkAsButton from '../LinkAsButton.svelte';
</script>
<script>
	import LinkAsButton from '../LinkAsButton.svelte';
</script>

<nav>
		<div>logo</div>:
		<span>Meditation:</span>
		<ul>
			{ #each episodes as {title}, i }
				<li><a href='#{ i + 1 }'>{i + 1}. <span class='hidden'>{title}</span></a></li>
			{/each}
		</ul>

		<ul class='ml-auto'>
			<li><LinkAsButton cta={"Buy the book"} link="https://www.mindfulnessconnected.com/shop/social-mindfulness"/></li>
			<li><img src='/apple-podcasts-lg-2x.png' alt='apple podcasts'/></li>
		</ul>
	</nav>

<style>
nav, ul {
		display: flex;
		flex-direction: row;
		background: grey;
}



</style>