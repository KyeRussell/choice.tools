<script lang="ts">
	import Choice from '$lib/components/Choice.svelte';

	export let first: string;
	export let second: string;
	export let onChoose: (name: string) => void;
</script>

<div
	class="grid h-full w-full grid-rows-[1fr,auto,1fr] gap-4 text-center md:flex md:flex-col md:justify-center"
>
	{#key [first, second]}
		<Choice name={first} {onChoose} />
		<div class="text-2xl">vs.</div>
		<Choice name={second} {onChoose} />
	{/key}
</div>
