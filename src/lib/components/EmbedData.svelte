<script lang="ts">
	import type { Character } from "$lib/types";

	export let character: Character | null = null;
	let title = (character ? character?.name + " - " : "") + "Terra Fusion";
	let description =
		character?.description ??
		"Inspired by Pokemon Infinite Fusion, Terra fusion is a website where you can fuse Terra's original characters into hybrid versions of themselves!";
</script>

<svelte:head>
	<meta content={title} property="og:title" />
	<meta content="#ffcc00" name="theme-color" />
	<meta content={description} property="og:description" />
	{#if character}
		<meta content={character.image} property="og:image" />
	{/if}
</svelte:head>
