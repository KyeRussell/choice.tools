<script lang="ts">
	export let disabled = false;
	export let invalid = false;
	export let icon: string | null = null;
	export let fullWidth: boolean = false;
</script>

<button
	class="flex items-center justify-center rounded-lg border-4 p-4 align-middle text-xl disabled:border-neutral-400 disabled:bg-neutral-200 disabled:text-neutral-400"
	class:w-full={fullWidth}
	class:is-invalid={invalid}
	{disabled}
	{...$$restProps}
	on:click
>
	{#if icon}
		<i class={icon} />
	{/if}
	{#if icon && $$slots.default}
		&nbsp;
	{/if}
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
