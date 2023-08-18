<script lang="ts">
	import fallback from "$lib/assets/fallback.png?format=webp";
	import type { Character } from "$lib/types";

	export let character: Character;
</script>

<div class="container">
	<div class="information">
		<h1>{character.name}</h1>
		<br />
		<p>{character.description}</p>
	</div>
	<div class="image">
		<img src={character.image ?? fallback} alt="A picture of {character.name}." />
	</div>
</div>

<style lang="scss">
	@import "include-media";

	.container {
		display: flex;
		gap: 10px;

		@include media("<730px") {
			flex-direction: column-reverse;
		}
	}

	.image {
		justify-content: center;
		align-items: center;
		min-width: 320px;
		height: 320px;
		display: flex;

		img {
			height: 100%;
		}

		@include media("<530px") {
			min-width: 100%;
			height: 50vw;
		}
	}
</style>
