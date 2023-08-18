<script lang="ts">
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
		<img src={character.image} alt="A picture of {character.name}." />
	</div>
</div>

<style lang="scss">
	.container {
		display: flex;
		gap: 10px;
	}

	.image {
		justify-content: center;
		align-items: center;
		min-height: 320px;
		min-width: 320px;
		display: flex;

		img {
			height: 320px;
		}
	}
</style>
