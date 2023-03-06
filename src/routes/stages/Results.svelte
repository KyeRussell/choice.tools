<script lang="ts">
  import Button from "$lib/components/Button.svelte";
  import IntroText from "$lib/components/IntroText.svelte";
  import List from "$lib/components/List.svelte";
  import ListItem from "$lib/components/ListItem.svelte";
  export let votes: Record<string, number>;
  export let onReset: () => void;
  $: sortedState = Object.entries(votes).sort((a, b) => b[1] - a[1]);
</script>

<div
  class="grid h-full grid-rows-[auto,1fr,auto] gap-4 rounded-lg md:shadow-none"
>
  <IntroText>Results</IntroText>

  <List ordered>
    {#each sortedState as [name, count], index}
      <ListItem>
        <span class="text-2xl">{index + 1}: {name}</span>
      </ListItem>
    {/each}
  </List>

  <Button on:click={onReset} class="w-full">Start again</Button>
</div>
