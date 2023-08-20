<script lang="ts">
	import CharacterSelector from "$lib/components/CharacterSelector.svelte";
	import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
	import CharacterInfo from "$lib/components/CharacterInfo.svelte";
	import EmbedData from "$lib/components/EmbedData.svelte";
	import Container from "$lib/components/Container.svelte";
	import arrow from "$lib/assets/arrow.svg";
	import Fa from "svelte-fa";

	export let data;
</script>

<EmbedData character={data.result} />

<a class="clear" href="/">
	<Fa icon={faTrashCan} /> Clear
</a>

<Container>
	{#each data.ingredients as character}
		<CharacterInfo {character} />
	{/each}
	{#if data.additions.length}
		<div class="add-character">
			<h1>Add a Character</h1>
			<br />
			<CharacterSelector options={data.additions} />
		</div>
	{/if}
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
		position: absolute;
		margin-top: -13px;

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
