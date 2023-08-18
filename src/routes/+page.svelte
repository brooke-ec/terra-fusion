<script lang="ts">
	export let data;
</script>

{#each data.baseCharacters as character}
	<div>
		<h1>{character.name}</h1>
	</div>
{/each}
