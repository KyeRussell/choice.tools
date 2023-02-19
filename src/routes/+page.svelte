<script lang="ts">
	import Setup from './setup.svelte';
	import Results from './results.svelte';
	import ChooseStage from './choose-stage.svelte';

	let choices: string[] = [];

	let state: 'setup' | 'chooser' | 'results' = 'setup';

	let votes: Record<string, number> = {};
</script>

<!-- Display the right component based on the state -->
{#if state === 'setup'}
	<Setup bind:choices onFinished={() => (state = 'chooser')} />
{:else if state === 'chooser'}
	<ChooseStage {choices} bind:votes onFinished={() => (state = 'results')} />
{:else}
	<Results {votes} />
{/if}
