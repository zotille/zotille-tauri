<script>
  import { Modal } from "@skeletonlabs/skeleton-svelte";

  export let visible = true;

  function drawerClose() {
    visible = false;
  }
</script>

<Modal
  bind:open={visible}
  triggerBase="btn preset-tonal"
  contentBase="bg-white p-4 space-y-4 shadow-xl w-[480px] h-screen"
  positionerJustify="justify-end"
  positionerAlign=""
  positionerPadding=""
  transitionsPositionerIn={{ x: 480, duration: 200 }}
  transitionsPositionerOut={{ x: 480, duration: 300 }}
>
  {#snippet trigger()}Open Drawer{/snippet}
  {#snippet content()}
    <header class="flex justify-between">
      <h2 class="h2">Drawer Example</h2>
    </header>
    <article>
      <p class="opacity-60">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, ab adipisci. Libero cumque sunt quis error veritatis amet, expedita
        voluptatem. Quos repudiandae consequuntur voluptatem et dicta quas, reprehenderit velit excepturi?
      </p>
    </article>
    <footer>
      <button type="button" class="btn preset-filled" onclick={drawerClose}>Close Drawer</button>
    </footer>
  {/snippet}
</Modal>
