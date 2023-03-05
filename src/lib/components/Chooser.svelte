<script lang="ts">
	import Choice from '$lib/components/Choice.svelte';

	export let first: string;
	export let second: string;
	export let onChoose: (name: string) => void;
</script>

<div class="flex h-full flex-col items-center justify-center gap-4">
	<Choice name={first} {onChoose} />
	<div class="text-2xl">vs.</div>
	<Choice name={second} {onChoose} />
</div>
