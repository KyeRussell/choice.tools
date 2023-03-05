/**
 * Generates permutations of all possible pairs of items in an array, without repeating pairs.
 *
 * @param items - The array of items to generate pairs from.
 * @returns An array of pairs, where each pair is an array of two items from the input `items` array.
 */
export default function generatePairs<T>(items: Array<T>): Array<[T, T]> {
	// Remove duplicates.
	items = [...new Set(items)];

	// Check if the array has at least two items.
	if (items.length < 2) {
		throw 'The array must have at least two items.';
	}

	return items.reduce((pairs, item1, i) => {
		items.slice(i + 1).forEach((item2) => pairs.push([item1, item2]));
		return pairs;
	}, [] as Array<[T, T]>);
}
