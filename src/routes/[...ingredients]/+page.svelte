<script lang="ts">
	import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
	import CharacterInfo from "$lib/components/CharacterInfo.svelte";
	import Container from "$lib/components/Container.svelte";
	import arrow from "$lib/assets/arrow.svg";
	import Fa from "svelte-fa";

	export let data;
</script>

<a class="clear" href="/">
	<Fa icon={faTrashCan} /> Clear
</a>

<Container>
	{#each data.ingredients as character}
		<CharacterInfo {character} />
	{/each}
</Container>

{#if data.result}
	<div class="arrow-container">
		<img src={arrow} alt="A large arrow." />
	</div>
	<Container>
		<CharacterInfo character={data.result} />
	</Container>
{/if}

<style lang="scss">
	.clear {
		color: var(--accent-red-10);

		&:hover {
			color: var(--accent-red-9);
		}

		&:active {
			color: var(--accent-red-8);
		}
	}

	.arrow-container {
		justify-content: center;
		display: flex;
	}
</style>
