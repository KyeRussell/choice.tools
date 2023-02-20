<script lang="ts">
	import { onMount } from 'svelte';
	export let onAddChoice: (choice: string) => void;
	export let focus: boolean = true;
	export let othersInList: boolean = false;
	let input: HTMLInputElement | null = null;

	let currentChoice: string = '';

	function onSubmit(event: SubmitEvent) {
		onAddChoice(currentChoice);
		currentChoice = '';
	}

	$: canAdd = currentChoice.length > 0;

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
	<button
		type="submit"
		disabled={!canAdd}
		class="flex flex-shrink-0 items-center justify-center rounded-lg border-4 border-neutral-700 bg-amber-200 p-4 align-middle text-xl disabled:border-neutral-400 disabled:bg-neutral-200 disabled:text-neutral-400"
	>
		<i class="fas fa-plus" />
	</button>
</form>
