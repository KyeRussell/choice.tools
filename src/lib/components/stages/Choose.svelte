<script lang="ts">
	import Chooser from '$lib/components/Chooser.svelte';
	import generatePairs from '$lib/generatePairs';

	export let choices: string[];
	export let votes: Record<string, number> = {};
	export let onFinished: () => void;

	votes = Object.fromEntries(
		choices.map((choice) => {
			return [choice, 0];
		})
	);

	// Generate an array of every pair permutation of two items in the list
	const pairs = generatePairs(choices);

	let first: string;
	let second: string;

	let currentPair = 0;

	$: {
		[first, second] = pairs[currentPair];
		console.log('Selected pair:', first, second);
	}

	function onChoose(name: string) {
		votes[name]++;
		if (currentPair < pairs.length - 1) {
			currentPair++;
		} else {
			onFinished();
		}
	}
</script>

<Chooser {first} {second} {onChoose} />
