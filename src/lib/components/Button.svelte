<script lang="ts">
  export let disabled = false;
  export let icon: string | null = null;

  let restPropsWithoutClass: SvelteRestProps = {};
  $: {
    restPropsWithoutClass = Object.fromEntries(
      Object.entries($$restProps).filter(([key, value]) => key !== "class")
    );
  }
</script>

<button
  class="flex items-center justify-center rounded-lg bg-primary p-4 align-middle text-xl shadow-sm hover:bg-amber-300 focus:outline-none focus:ring focus:ring-amber-400 disabled:cursor-not-allowed disabled:border-neutral-400 disabled:bg-neutral-200 disabled:text-neutral-400 dark:bg-violet-900 dark:hover:bg-violet-800 dark:focus:ring-violet-700 dark:disabled:border-gray-500 dark:disabled:bg-gray-600 dark:disabled:bg-opacity-80 dark:disabled:text-gray-500 {$$props.class}"
  {disabled}
  {...restPropsWithoutClass}
  on:click
>
  {#if icon}
    <i class={icon} />
  {/if}
  {#if icon && $$slots.default}
    &nbsp;
  {/if}
  <slot />
</button>
