<script>
  export let loading = false;
</script>

{#if loading}
  <div class="loading-overlay">
    <div class="spinner"></div>
  </div>
{/if}

<slot></slot>

<style>
  .loading-overlay {
    position: fixed;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.5);
  }

  .spinner {
    width: 40px;
    height: 40px;
    border: 4px solid rgba(255, 255, 255, 0.3);
    border-top-color: #fff;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  .content {
    visibility: hidden; /* 让内容在加载时隐藏 */
  }

  .loading-overlay {
    z-index: 1000; /* 确保加载动画位于上层 */
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  /* 当不加载时显示内容 */
  :global(.loading-off) .content {
    visibility: visible;
  }
</style>
