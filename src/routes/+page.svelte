<script lang="ts">
	import Setup from './setup.svelte';
	import Results from './results.svelte';
	import ChooseStage from './choose-stage.svelte';

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
	<div class="h-full w-full md:max-w-2xl">
		{#if state === 'setup'}
			<Setup bind:choices onFinished={() => (state = 'chooser')} />
		{:else if state === 'chooser'}
			<ChooseStage {choices} bind:votes onFinished={() => (state = 'results')} />
		{:else}
			<Results {votes} onReset={reset} />
		{/if}
	</div>
</div>
