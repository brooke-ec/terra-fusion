<script lang="ts">
	import { createCombobox, melt } from "@melt-ui/svelte";
	import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
	import type { Character } from "$lib/types";
	import { goto } from "$app/navigation";
	import { page } from "$app/stores";
	import Fa from "svelte-fa";

	export let options: Character[];

	const {
		elements: { menu, input, item },
		states: { open, isEmpty, inputValue },
	} = createCombobox<Character>({
		loop: true,
		onValueChange: ({ next }) => {
			if (next) goto(`${$page.url.pathname.replace(/^\/+/g, "")}/${next.name}`);
			return undefined;
		},
		filterFunction: ({ itemValue, input }) => {
			return itemValue.name.toLowerCase().includes(input.toLowerCase().trim());
		},
	});
</script>

<div class="dropdown">
	<input use:melt={$input} placeholder="Select a Character..." />
	<Fa icon={$open ? faChevronUp : faChevronDown} class="chevron" />
</div>

<div class="dropdown-menu" use:melt={$menu}>
	{#if $open}
		<div class="options-container">
			{#each options as option (option.id)}
				<div
					class="option"
					use:melt={$item({
						value: option,
						label: option.name,
					})}
				>
					{option.name}
				</div>
			{/each}

			{#if $isEmpty && $inputValue.value !== ""}
				<div class="option">No results found</div>
			{/if}
		</div>
	{/if}
</div>

<style lang="scss">
	.dropdown {
		justify-content: right;
		align-items: center;
		display: flex;

		input {
			background-color: var(--background-8);
			color: var(--text-10);
			border-radius: 5px;
			padding: 5px 10px;
			cursor: pointer;
			outline: none;
			width: 250px;
			border: none;
		}

		& > :global(.chevron) {
			pointer-events: none;
			position: absolute;
			margin-right: 7px;
		}
	}

	.dropdown-menu {
		border-radius: 5px;
		overflow: hidden;
		width: 250px;
	}

	.options-container {
		max-height: 200px;
		overflow-y: auto;
	}

	.option {
		background-color: var(--background-8);
		padding: 5px 10px;

		&[data-highlighted] {
			background-color: var(--background-7);
		}
	}
</style>
