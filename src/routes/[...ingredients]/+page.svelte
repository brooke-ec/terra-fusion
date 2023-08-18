<script lang="ts">
	import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
	import Fa from "svelte-fa";

	export let data;
</script>

<a class="clear" href="/">
	<Fa icon={faTrashCan} /> Clear
</a>

<div class="container" />

{JSON.stringify(data.ingredients)}

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

	.container {
		background-color: var(--background-9);
		border-radius: 10px;
		min-height: 400px;
		margin: 10px 0;
	}
</style>
