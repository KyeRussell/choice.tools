<script lang="ts">
	import ChoiceInput from '$lib/components/ChoiceInput.svelte';
	import Button from '$lib/components/Button.svelte';
	import IntroText from '$lib/components/IntroText.svelte';
	import List from '$lib/components/List.svelte';
	import ListItem from '$lib/components/ListItem.svelte';

	export let choices: string[];
	export let onFinished: () => void;

	/** Process a choice being added */
	function onAddChoice(choice: string) {
		choices = [...choices, choice];
	}

	/** Process a choice being removed */
	function onRemoveChoice(choiceName: string) {
		choices = choices.filter((choice) => choice !== choiceName);
	}

	$: hasEnoughChoices = choices.length >= 3;
	$: canFinish = hasEnoughChoices;
</script>

<div class="grid h-full grid-rows-[auto,1fr,auto] gap-2 rounded md:gap-4">
	<IntroText>Add your choices</IntroText>
	<List>
		{#each choices as choice}
			<ListItem>
				<div class="flex w-full items-center justify-between gap-2">
					<span class="text-2xl">{choice}</span>
					<Button
						type="submit"
						on:click={() => onRemoveChoice(choice)}
						icon="fa-regular fa-trash-can"
					/>
				</div>
			</ListItem>
		{/each}
		<!-- Input for new choice -->
		<ChoiceInput {onAddChoice} {choices} />
	</List>

	<!-- Finished! -->
	<Button on:click={onFinished} disabled={!canFinish} fullWidth>I've finished adding choices</Button
	>
</div>
