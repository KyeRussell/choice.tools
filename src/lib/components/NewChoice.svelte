<script lang="ts">
	import { onMount } from 'svelte';
	import ListItem from './ListItem.svelte';
	import Button from '$lib/components/Button.svelte';
	export let onAddChoice: (choice: string) => void;
	export let focus: boolean = true;
	export let choices: string[] = [];
	let input: HTMLInputElement | null = null;

	let currentChoice: string = '';

	function onSubmit(event: SubmitEvent) {
		if (isValid) {
			onAddChoice(processedChoice);
			currentChoice = '';
		}
	}

	$: processedChoice = currentChoice.trim();
	$: isValid = !choices.includes(processedChoice) && processedChoice.length > 0;
	$: othersInList = choices.length > 0;

	onMount(() => {
		if (focus && input) {
			input.focus();
		}
	});
</script>

<ListItem highlightOnFocus>
	<form on:submit|preventDefault={onSubmit} class="flex w-full items-center gap-2">
		<input
			class="m-0 h-14 w-full border-0 bg-inherit p-0 text-2xl focus:ring-0 dark:placeholder:text-neutral-500"
			type="text"
			bind:value={currentChoice}
			placeholder={!othersInList ? 'Type here...' : 'And another...'}
			bind:this={input}
			data-new-choice-input
		/>
		<Button type="submit" icon="fas fa-plus" disabled={!isValid} data-new-choice-submit />
	</form>
</ListItem>
