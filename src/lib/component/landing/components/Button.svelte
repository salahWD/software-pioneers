<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let primary = true;
  export let secondary = false;
  export let center = true;
  export let url = "";
  export let cusomClass = "";

  const dispatch = createEventDispatcher();

  if (secondary) primary = false;
</script>

<div class:flex={center} class="items-center justify-center">
  {#if url != ""}
    <a href={url}>
      <button
        class={`
          ${primary && "text-gray-800 bg-white"}
          ${secondary && "text-white gradient"}
          mx-auto lg:mx-0 hover:underline font-bold rounded-full my-5 py-2 px-4 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out
          ${cusomClass}`}
      >
        <slot>Click me!</slot>
      </button>
    </a>
  {:else}
    <button
      on:click={(e) => {
        dispatch("clicked", e);
      }}
      class={`
        ${primary && "text-gray-800 bg-white"}
        ${secondary && "text-white gradient"}
        mx-auto lg:mx-0 hover:underline font-bold rounded-full my-5 py-2 px-4 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out
        ${cusomClass}`}
    >
      <slot>Click me!</slot>
    </button>
  {/if}
</div>

<style>
  .gradient {
    @apply bg-gradient-to-r from-pink to-yellow;
  }
</style>
