<div class="container"><slot /></div>

<style lang="scss">
	@import "include-media";

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

		& > :global(*):nth-child(odd) {
			grid-column-start: 1;
			grid-column-end: 3;
		}

		& > :global(*):last-child {
			grid-column-start: 2;
			grid-column-end: 4;
		}

		& > :global(*):nth-child(even) {
			grid-column-start: 3;
			grid-column-end: 5;
		}

		@include media("<1460px") {
			grid-template-columns: 1fr;

			& > :global(*) {
				grid-column-start: 1 !important;
				grid-column-end: 2 !important;
			}
		}

		@include media("<550px") {
			padding: 30px 5vw;
		}
	}
</style>
