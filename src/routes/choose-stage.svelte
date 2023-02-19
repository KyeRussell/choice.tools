<script lang="ts">
	import Chooser from './chooser.svelte';

	export let choices: string[];
	export let votes: Record<string, number> = {};
	export let onFinished: () => void;

	votes = Object.fromEntries(
		choices.map((choice) => {
			return [choice, 0];
		})
	);

	// Generate an array of every permutation of two items in the list
	const permutations = choices.flatMap((value, index) => {
		return choices.slice(index + 1).map((other) => [value, other]);
	});

	let first: string;
	let second: string;

	let currentPermutation = 0;

	$: {
		console.log(permutations);
		[first, second] = permutations[currentPermutation];
		console.log('Selected permutation:', first, second);
	}

	function onChoose(name: string) {
		votes[name]++;
		if (currentPermutation < permutations.length - 1) {
			currentPermutation++;
		} else {
			onFinished();
		}
	}
</script>

<Chooser {first} {second} {onChoose} />
