<script lang="ts">
	import Setup from '$lib/components/stages/Setup.svelte';
	import Results from '$lib/components/stages/Results.svelte';
	import ChooseStage from '$lib/components/stages/Choose.svelte';

	let choices: string[] = [];

	let state: 'setup' | 'chooser' | 'results' = 'setup';

	let votes: Record<string, number> = {};

	function reset() {
		state = 'setup';
		choices = [];
		votes = {};
	}
</script>

<!-- Display the right component based on the state -->
<div class="flex h-full w-full justify-center">
	<div class="h-full w-full md:max-w-xl">
		{#if state === 'setup'}
			<Setup bind:choices onFinished={() => (state = 'chooser')} />
		{:else if state === 'chooser'}
			<ChooseStage {choices} bind:votes onFinished={() => (state = 'results')} />
		{:else}
			<Results {votes} onReset={reset} />
		{/if}
	</div>
</div>
