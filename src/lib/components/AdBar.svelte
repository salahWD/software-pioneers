<script lang="ts">
  import Button from "./common/Button.svelte";

  export let height = 0;
</script>

<!--Nav-->
<nav
  class={`w-full text-white bg-slate-700 block height-[${height}px] overflow-hidden`}
>
  <div
    class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2"
  >
    <p class="w-4/5 text-white">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque fuga
      sapiente accusamus accusantium inventore quos enim tempora! Vero
    </p>
    <Button
      url={"https://alkatib.com"}
      cusomClass="mt-0 mb-0"
      secondary={true}
      center={false}>show now</Button
    >
  </div>
</nav>
