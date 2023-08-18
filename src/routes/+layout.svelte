<script lang="ts">
	import Footer from "$lib/components/Footer.svelte";
	import Header from "$lib/components/Header.svelte";
	import "$lib/global.scss";
	import "greset";
</script>

<Header />
<div class="content">
	<main>
		<slot />
	</main>
	<Footer />
</div>

<style lang="scss">
	@import "include-media";

	.content {
		flex-direction: column;
		min-height: 100vh;
		padding-top: 80px;
		display: flex;
	}

	main {
		background-color: var(--background-10);
		padding: 30px 50px;
		flex-grow: 1;

		@include media("<550px") {
			padding: 30px 5vw;
		}
	}
</style>
