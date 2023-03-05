<script lang="ts">
	export let disabled = false;
	export let invalid = false;
	export let type: 'button' | 'submit' | 'reset' = 'button';
</script>

<button
	class="flex flex-shrink-0 items-center justify-center rounded-lg border-4  p-4 align-middle text-xl disabled:border-neutral-400 disabled:bg-neutral-200 disabled:text-neutral-400"
	class:is-invalid={invalid}
	{disabled}
	{type}
>
	<slot />
</button>

<style>
	button {
		@apply border-neutral-700 bg-amber-200;
	}

	/* Invalid state */
	.is-invalid {
		@apply border-red-400 bg-red-200 text-red-400;
	}
</style>
