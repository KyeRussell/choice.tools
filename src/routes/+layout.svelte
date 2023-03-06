<script lang="ts">
  import "../app.css";
  import "@fortawesome/fontawesome-free/css/all.css";
</script>

<!-- set the title -->
<svelte:head>
  <title>choice.tools</title>
</svelte:head>

<div
  class="dark:bg-neutral-80 grid h-full grid-rows-[auto,1fr] gap-4 font-['Roboto_Slab'] text-neutral-700 dark:text-gray-100 md:gap-7"
>
  <header
    class="bg-amber-200 py-4 px-4 text-center shadow-sm dark:bg-gray-900 dark:bg-opacity-50 md:bg-opacity-40 md:px-20 md:shadow-none"
  >
    <h1 class="flex-grow text-5xl font-bold">
      choice<span class="text-amber-400 dark:text-violet-300">.</span>tools
    </h1>
  </header>
  <main class="rounded-t-lg px-4 md:rounded-t-none md:px-20">
    <slot />
  </main>
  <footer
    class="pb-safe flex items-center justify-center bg-amber-200 pt-2 dark:bg-gray-900 dark:bg-opacity-50 md:bg-opacity-40"
  >
    <!-- svelte-ignore security-anchor-rel-noreferrer -->
    Made by&nbsp;
    <a
      class="rounded text-rose-500 hover:text-rose-600 hover:underline active:text-rose-700 dark:text-violet-300 dark:hover:text-violet-400 dark:active:text-violet-500"
      target="_blank"
      rel="me"
      href="https://github.com/kyerussell">Kye Russell</a
    >
  </footer>
</div>
