<script lang="ts">
	import '../app.css';
	import '@fortawesome/fontawesome-free/css/all.css';
</script>

<!-- set the title -->
<svelte:head>
	<title>choice.tools</title>
</svelte:head>

<div
	class="grid h-full grid-rows-[auto,1fr] divide-y-4 divide-neutral-700 font-serif text-neutral-700"
>
	<header class="bg-amber-50 px-4 py-2 text-center md:py-4 md:px-20">
		<h1 class="flex-grow font-['Roboto_Slab'] text-5xl font-bold">
			choice<span class="text-amber-400">.</span>tools
		</h1>
	</header>
	<main class="px-4 py-2 md:px-20 md:py-4">
		<slot />
	</main>
	<footer class="pb-safe flex items-center justify-center bg-amber-50 p-2 md:p-4" />
</div>
