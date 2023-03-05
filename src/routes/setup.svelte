<script lang="ts">
	import ChoiceInput from './choice-input.svelte';
	import autoAnimate from '@formkit/auto-animate';
	import Button from '$lib/components/Button.svelte';

	export let choices: string[];
	export let onFinished: () => void;

	/** Process a choice being added */
	function onAddChoice(choice: string) {
		choices = [...choices, choice];
	}

	function onRemoveChoice(choiceName: string) {
		choices = choices.filter((choice) => choice !== choiceName);
	}
</script>

<div class="grid h-full grid-rows-[auto,1fr,auto] gap-2 rounded md:gap-4">
	<p class="p-2 text-center text-3xl">Add your choices</p>
	<div class="flex flex-col rounded border-4 border-neutral-700">
		<!-- Existing choices -->
		<ul
			class="divide-y-4 divide-neutral-700 border-b-4 border-b-neutral-700"
			use:autoAnimate={{ duration: 100 }}
		>
			{#each choices as choice}
				<li class="flex w-full items-center justify-between bg-neutral-100 p-4 align-middle">
					<span class="text-2xl">{choice}</span>
					<Button
						type="submit"
						on:click={() => onRemoveChoice(choice)}
						icon="fa-regular fa-trash-can"
					/>
				</li>
			{/each}
			<!-- Input for new choice -->
			<ChoiceInput {onAddChoice} {choices} />
		</ul>
	</div>

	<!-- Finished! -->
	<Button on:click={onFinished} disabled={choices.length < 3} fullWidth
		>I've finished adding choices
	</Button>
</div>
