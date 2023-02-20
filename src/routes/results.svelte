<script lang="ts">
	export let votes: Record<string, number>;
	export let onReset: () => void;
	$: sortedState = Object.entries(votes).sort((a, b) => b[1] - a[1]);
</script>

<div class="grid h-full grid-rows-[auto,1fr,auto] gap-2 md:gap-4">
	<p class="text-center text-2xl md:text-4xl">Results:</p>

	<div>
		<div class="flex flex-col rounded border-4 border-neutral-700">
			<ul class="divide-y-4 divide-neutral-700">
				{#each sortedState as [name, count], index}
					<li
						class="min-hh-20 flex w-full items-center justify-between bg-neutral-100 p-4 align-middle"
					>
						<span class="text-3xl">{index + 1}: {name}</span>
					</li>
				{/each}
			</ul>
		</div>
	</div>

	<div class="w-full">
		<button
			class="flex h-14 w-full items-center justify-center rounded border-4 border-neutral-700 bg-amber-200 align-middle text-xl disabled:border-neutral-400 disabled:bg-neutral-200 disabled:text-neutral-400 md:h-20 md:text-3xl"
			on:click={onReset}>Start again</button
		>
	</div>
</div>
