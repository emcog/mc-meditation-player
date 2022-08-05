<script lang="ts">
	// import { page } from '$app/stores';
	import logo from './mindfulness-connected-logo_t.svg';
	import Button from '../components/Button.svelte';
	import LinkAsButton from '../components/LinkAsButton.svelte';

</script>

<header>
	<!--	adobe futura-->
	<link rel="stylesheet" href="https://use.typekit.net/edm6svv.css"/>

	<nav class='flex py-4 border-b-2 mb-4'>
		<a class='md:ml-8 ml-4' href="https://www.mindfulnessconnected.com">
			<img class='w-[120px]' src={logo} alt="Mindfulness Connected" />
		</a>
		<LinkAsButton LinkAsButtonClass='ml-auto md:mr-8 mr-4' cta={"Buy the book"} link={"https://www.mindfulnessconnected.com/shop/social-mindfulness"}/>

	</nav>

	<div class="corner">
		<!-- TODO put something else here? github link? -->
	</div>
</header>

<style>
</style>
