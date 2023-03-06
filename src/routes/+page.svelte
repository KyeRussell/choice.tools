<script lang="ts">
  import Setup from "./stages/Setup.svelte";
  import Results from "./stages/Results.svelte";
  import ChooseStage from "./stages/Choose.svelte";

  let choices: string[] = [];

  let state: "setup" | "chooser" | "results" = "setup";

  let votes: Record<string, number> = {};

  function reset() {
    state = "setup";
    choices = [];
    votes = {};
  }
</script>

<!-- Display the right component based on the state -->
<div class="flex h-full w-full justify-center">
  <div
    class="h-full w-full md:max-w-2xl md:rounded-xl md:border md:border-neutral-100 md:bg-neutral-50 md:p-6 md:shadow-sm md:dark:border-gray-600 md:dark:bg-gray-700"
  >
    {#if state === "setup"}
      <Setup bind:choices onFinished={() => (state = "chooser")} />
    {:else if state === "chooser"}
      <ChooseStage
        {choices}
        bind:votes
        onFinished={() => (state = "results")}
      />
    {:else}
      <Results {votes} onReset={reset} />
    {/if}
  </div>
</div>
