<!-- @component 
  ### 左侧路由菜单按钮
  我敲这玩意可以直接写markdown
 -->
<script>
  import clsx from "clsx";

  export let onClick = () => {};
  /** 当前路由是否被激活 */ export let active = false;
</script>

<button
  class={clsx("item w-full px-2 py-1 cursor-pointer pl-10 inline-flex", {
    active,
  })}
  onclick={onClick}
>
  <slot />
</button>

<style>
  .item {
    transition: all 0.25s ease-in-out;

    &:hover,
    &.active {
      background-color: #f5f5f5;
    }
  }
</style>
