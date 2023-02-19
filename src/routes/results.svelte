<script lang="ts">
	export let votes: Record<string, number>;
	$: sortedState = Object.entries(votes).sort((a, b) => b[1] - a[1]);
</script>

<p class="mb-2 text-center text-2xl">Results:</p>

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
