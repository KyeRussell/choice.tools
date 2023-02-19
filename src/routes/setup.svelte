<script lang="ts">
	import ChoiceInput from './choice-input.svelte';
	import autoAnimate from '@formkit/auto-animate';

	export let choices: string[];
	export let onFinished: (choices: string[]) => void;

	/** Process a choice being added */
	function onAddChoice(choice: string) {
		choices = [...choices, choice];
	}

	function onRemoveChoice(choiceName: string) {
		choices = choices.filter((choice) => choice !== choiceName);
	}
</script>

<div class="grid h-full grid-rows-[auto,1fr,auto] flex-col gap-2">
	<p class="text-center text-2xl">Add your choices to the list.</p>
	<div class="flex flex-col rounded border-4 border-neutral-700">
		<!-- Existing choices -->
		<ul
			class="divide-y-4 divide-neutral-700 border-b-4 border-b-neutral-700"
			use:autoAnimate={{ duration: 100 }}
		>
			{#each choices as choice}
				<li class="flex h-20 w-full items-center justify-between bg-neutral-100 p-4 align-middle">
					<span class="text-xl">{choice}</span>
					<button
						type="submit"
						class="flex h-14 w-14 flex-shrink-0 items-center justify-center border-4 border-neutral-700 bg-amber-200 align-middle text-xl disabled:bg-gray-200"
						on:click={() => onRemoveChoice(choice)}
					>
						<i class="fas fa-minus" />
					</button>
				</li>
			{/each}
			<!-- Input for new choice -->
			<ChoiceInput {onAddChoice} othersInList={choices.length > 0} />
		</ul>
	</div>

	<!-- Finished! -->
	<div class="w-full">
		<button
			class="flex h-14 w-full items-center justify-center border-4 border-neutral-700 bg-amber-200 align-middle text-xl disabled:border-neutral-400 disabled:bg-neutral-200 disabled:text-neutral-400"
			disabled={choices.length < 2}
			on:click={onFinished(choices)}>I've finished adding choices</button
		>
	</div>
</div>
