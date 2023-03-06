<script lang="ts">
  import NewChoice from "$lib/components/NewChoice.svelte";
  import Button from "$lib/components/Button.svelte";
  import IntroText from "$lib/components/IntroText.svelte";
  import List from "$lib/components/List.svelte";
  import ListItem from "$lib/components/ListItem.svelte";

  export let choices: string[];
  export let onFinished: () => void;

  /** Process a choice being added */
  function onAddChoice(choice: string) {
    choices = [...choices, choice];
  }

  /** Process a choice being removed */
  function onRemoveChoice(choiceName: string) {
    choices = choices.filter((choice) => choice !== choiceName);
  }

  $: hasEnoughChoices = choices.length >= 3;
  $: canFinish = hasEnoughChoices;
</script>

<div
  class="between grid h-full grid-rows-[auto,1fr,auto,auto] content-between rounded-lg md:shadow-none"
>
  <IntroText>Add your choices</IntroText>

  <List>
    {#each choices as choice}
      <ListItem>
        <div class="flex w-full items-center justify-between gap-2">
          <span class="text-2xl">{choice}</span>
          <Button
            type="submit"
            on:click={() => onRemoveChoice(choice)}
            icon="fa-regular fa-trash-can"
          />
        </div>
      </ListItem>
    {/each}
    <!-- Input for new choice -->
    <NewChoice {onAddChoice} {choices} />
  </List>

  <div class="mt-2">
    <p
      class="text-center leading-none text-neutral-500 dark:text-gray-200"
      class:hidden={hasEnoughChoices}
    >
      {#if choices.length === 0}
        You need at least 3 choices.
      {:else}
        You need {3 - choices.length} more choice{#if 3 - choices.length > 1}s{/if}.
      {/if}
    </p>
    <Button
      on:click={onFinished}
      disabled={!canFinish}
      class="mt-2 w-full first:pt-4"
    >
      I've finished adding choices
    </Button>
  </div>
</div>
