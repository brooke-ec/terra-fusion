<script lang="ts">
	import logo from "$lib/assets/logo.png?format=webp";
	import { fade } from "svelte/transition";
	import { navigating } from "$app/stores";
</script>

<header>
	<img src={logo} alt="Terra Fusion Logo" height="60px" />
	{#if $navigating}
		<div class="loading-bar" transition:fade />
	{/if}
</header>

<style lang="scss">
	header {
		box-shadow: 0px 4px 4px 0px #00000040;
		background-color: var(--background-11);
		position: fixed;
		padding: 10px;
		height: 80px;
		width: 100%;
		z-index: 10;
	}

	.loading-bar {
		height: 2px;
		width: 100vw;
		margin-top: 4px;
		position: absolute;
		margin-left: -10px;
		background: repeating-linear-gradient(
			to right,
			var(--accent-red-7) 0%,
			var(--accent-red-10) 20%,
			var(--accent-red-7)
		);
		background-size: 200% auto;
		background-position: 0 100%;
		animation: gradient 1s infinite;
		animation-fill-mode: forwards;
		animation-timing-function: linear;
	}

	@keyframes gradient {
		0% {
			background-position: 0 0;
		}
		100% {
			background-position: -200% 0;
		}
	}
</style>
