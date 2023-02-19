<script lang="ts">
	export let name: string;
	export let onChoose: (name: string) => void;
</script>

<button
	class="flex w-full flex-col items-center justify-center rounded-xl bg-amber-200 p-8"
	on:click={() => onChoose(name)}
>
	<span class="text-2xl">{name}</span>
</button>
