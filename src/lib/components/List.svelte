<script lang="ts">
  import autoAnimate from "@formkit/auto-animate";
  export let ordered: boolean = false;
  $: listElement = ordered ? "ol" : "ul";
</script>

<div
  class="flex flex-col rounded-lg bg-neutral-50 pb-1 shadow-sm dark:bg-inherit md:shadow-none"
>
  <svelte:element
    this={listElement}
    class="divide-y-2 divide-neutral-200 divide-opacity-60 border-b-2 border-b-neutral-200 border-opacity-60 first:rounded-t-lg  dark:divide-gray-700 dark:border-b-gray-700 dark:md:divide-gray-600 dark:md:border-b-gray-600"
    use:autoAnimate={{ duration: 150 }}
  >
    <slot />
  </svelte:element>
</div>
