<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	export let votes: Record<string, number>;
	export let onReset: () => void;
	$: sortedState = Object.entries(votes).sort((a, b) => b[1] - a[1]);
</script>

<div class="grid h-full grid-rows-[auto,1fr,auto] gap-2 md:gap-4">
	<p class="p-2 text-center text-3xl">Results:</p>

	<div>
		<div class="flex flex-col rounded border-4 border-neutral-700">
			<ul class="divide-y-4 divide-neutral-700">
				{#each sortedState as [name, count], index}
					<li
						class="min-hh-20 flex w-full items-center justify-between bg-neutral-100 p-4 align-middle"
					>
						<span class="text-2xl">{index + 1}: {name}</span>
					</li>
				{/each}
			</ul>
		</div>
	</div>

	<Button on:click={onReset} fullWidth>Start again</Button>
</div>
