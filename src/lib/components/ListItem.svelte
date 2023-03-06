<script lang="ts">
  export let highlightOnFocus: boolean = false;
</script>

<li
  class="flex w-full items-center justify-between p-4 first:rounded-t-lg"
  class:focus-within:bg-neutral-100={highlightOnFocus}
>
  <slot />
</li>
