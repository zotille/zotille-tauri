<script>
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import Loading from "@components/Loading.svelte";
  import RouteMenuItem from "@components/RouteMenuItem.svelte";
  import clsx from "clsx";
  import { appContainer, AppService } from "@utils/index";

  // 定义目录结构
  const routes = [
    { name: "主页", path: "/" },
    { name: "ToDo", path: "/todo-list" },
  ];

  // 从 $page store 获取当前路径
  let currentPath = $page.url.pathname;
  $: {
    currentPath = $page.url.pathname; // 当前路径会自动更新
  }

  const appService = appContainer.get(AppService);
  const { appDone } = appService;
</script>

<!-- 渲染目录并高亮当前路由 -->
<main>
  <Loading loading={$appDone}>
    <div class="flex w-[100vw] h-[100vh]">
      <div class="w-60 h-full shrink-0 border-r border-gray-300 p-2">
        <!-- 左上角Logo -->
        <div
          class={clsx(
            "flex",
            "items-center",
            "py-4",
            "px-8",
            "hover:bg-gray-100",
            "text-xl",
            " font-[Orbitron]",
            "border-b",
            "border-gray-300"
          )}
        >
          zotille tools
        </div>
        <nav class="w-full p-2">
          <ul>
            {#each routes as { name, path }}
              <RouteMenuItem onClick={() => goto(path)} active={path === currentPath}>
                {name}
              </RouteMenuItem>
            {/each}
          </ul>
        </nav>
      </div>
      <div class="flex-1 p-2">
        <slot />
      </div>
    </div>
  </Loading>
</main>

<style>
</style>
