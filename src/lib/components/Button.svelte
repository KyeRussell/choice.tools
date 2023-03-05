<script lang="ts">
	export let disabled = false;
	export let icon: string | null = null;
	export let fullWidth: boolean = false;
</script>

<button
	class="flex items-center justify-center rounded-lg border-4 border-neutral-700 bg-amber-200 p-4 align-middle text-xl disabled:border-neutral-400 disabled:bg-neutral-200 disabled:text-neutral-400"
	class:w-full={fullWidth}
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
