<script lang="ts">
	import { onMount } from 'svelte';
	import Button from '$lib/components/Button.svelte';
	export let onAddChoice: (choice: string) => void;
	export let focus: boolean = true;
	export let choices: string[] = [];
	let input: HTMLInputElement | null = null;

	let currentChoice: string = '';

	function onSubmit(event: SubmitEvent) {
		if (!canAdd) {
			return;
		}
		onAddChoice(currentChoice);
		currentChoice = '';
	}

	$: isValid = !choices.includes(currentChoice);
	$: canAdd = isValid && currentChoice.length > 0;
	$: othersInList = choices.length > 0;

	onMount(() => {
		if (focus && input) {
			input.focus();
		}
	});
</script>

<form
	class="flex w-full items-center justify-between gap-4 bg-neutral-50 p-4 align-middle"
	on:submit|preventDefault={onSubmit}
>
	<input
		class="m-0 h-14 w-full border-0 bg-inherit p-0 text-2xl focus:ring-0"
		type="text"
		bind:value={currentChoice}
		placeholder={!othersInList ? 'Type here...' : 'And another...'}
		bind:this={input}
	/>
	<Button type="submit" disabled={!canAdd} invalid={!isValid}>
		<i class="fas fa-plus" />
	</Button>
</form>
