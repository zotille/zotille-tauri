<script lang="ts">
  import { goto } from "$app/navigation";

  let cnt = $state(1);

  const increase = () => {
    cnt += 1;
  };
  const decrease = () => {
    cnt -= 1;
  };
</script>

<main class="container">这里是首页</main>

<style>
</style>
