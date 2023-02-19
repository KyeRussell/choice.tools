<script lang="ts">
	export let name: string;
	export let onChoose: (name: string) => void;
</script>

<button
	class="flex w-full flex-col items-center justify-center rounded-xl border-4 border-neutral-700 bg-amber-200 p-8"
	on:click={() => onChoose(name)}
>
	<span class="text-2xl md:text-6xl">{name}</span>
</button>
