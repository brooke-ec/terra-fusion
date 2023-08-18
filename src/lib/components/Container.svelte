<div class="container"><slot /></div>

<style lang="scss">
	.container {
		background-color: var(--background-9);
		border-radius: 10px;
		padding: 30px 40px;
		min-height: 400px;
		margin: 10px 0;
		gap: 50px 100px;

		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(auto, auto);

		& > :global(div):nth-child(odd) {
			grid-column-start: 1;
			grid-column-end: 3;
		}

		& > :global(div):last-child {
			grid-column-start: 2;
			grid-column-end: 4;
		}

		& > :global(div):nth-child(even) {
			grid-column-start: 3;
			grid-column-end: 5;
		}
	}
</style>
