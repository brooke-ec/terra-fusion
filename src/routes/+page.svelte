<script lang="ts">
	import CharacterSelector from "$lib/components/CharacterSelector.svelte";
	import Container from "$lib/components/Container.svelte";
	import EmbedData from "$lib/components/EmbedData.svelte";

	export let data;
</script>

<EmbedData />

<Container>
	<div class="add-character">
		<h1>Select a Character</h1>
		<br />
		<CharacterSelector options={data.baseCharacters} />
	</div>
</Container>
