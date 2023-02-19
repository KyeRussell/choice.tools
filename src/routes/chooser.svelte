<script lang="ts">
	import Choice from './choice.svelte';

	export let first: string;
	export let second: string;
	export let onChoose: (name: string) => void;
</script>

<div class="flex h-full flex-col items-center justify-center gap-4 md:flex-row">
	<Choice name={first} {onChoose} />
	<span class="hidden text-6xl md:visible">vs.</span>
	<Choice name={second} {onChoose} />
</div>
