<script lang="ts">
	import '../app.css';
	import '@fortawesome/fontawesome-free/css/all.css';
</script>

<div
	class="grid h-full grid-rows-[auto,1fr,auto] divide-y-4 divide-neutral-700 font-serif text-neutral-700 md:mx-24"
>
	<header class="px-4 py-2 text-center md:my-8">
		<h1 class="flex-grow font-['Roboto_Slab'] text-5xl font-bold md:text-8xl">
			choice<span class="text-amber-300">.</span>tools
		</h1>
	</header>
	<main class="px-4 py-2 md:py-4">
		<slot />
	</main>
	<footer
		class="flex items-center justify-center bg-amber-50 p-2 text-center align-middle text-lg text-neutral-500 md:my-8"
	>
		Made by Kye Russell
	</footer>
</div>
