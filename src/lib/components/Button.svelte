<script lang="ts">
	export let disabled = false;
	export let icon: string | null = null;
	let restPropsWithoutClass: SvelteRestProps = {};
	$: {
		restPropsWithoutClass = Object.fromEntries(
			Object.entries($$restProps).filter(([key, value]) => key !== 'class')
		);
	}
</script>

<button
	class="flex items-center justify-center rounded-lg border-4 border-neutral-700 bg-primary p-4 align-middle text-xl disabled:border-neutral-400 disabled:bg-neutral-200 disabled:text-neutral-400 {$$props.class}"
	{disabled}
	{...restPropsWithoutClass}
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
