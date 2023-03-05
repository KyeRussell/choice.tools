<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	export let name: string;
	export let onChoose: (name: string) => void;
</script>

<Button on:click={() => onChoose(name)} class="w-full">{name}</Button>
