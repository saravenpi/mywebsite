<script>
  import Icon from "@iconify/svelte";

  const projects = [
    {
      name: "Knot",
      description:
        "A monorepo package manager for dependency management and builds",
      url: "https://github.com/saravenpi/knot",
      color: "orange",
      icon: "solar:box-minimalistic-bold",
    },
    {
      name: "Marcel",
      description: "Turn your life organisation into a game",
      url: "https://marcel.my",
      color: "purple",
      icon: "solar:gameboy-bold",
    },
    {
      name: "Wave",
      description: "A C HTTP server library",
      url: "https://github.com/saravenpi/wave",
      color: "green",
      icon: "solar:server-path-bold",
    },
    {
      name: "Brain.h",
      description: "A C neural network library",
      url: "https://github.com/saravenpi/brain.h",
      color: "pink",
      icon: "solar:atom-bold",
    },
    {
      name: "pebble.nvim",
      description:
        " Obsidian markdown navigation and note taking plugin for Neovim.",
      url: "https://github.com/saravepi/pebble.nvim",
      color: "blue",
      icon: "solar:notebook-bold-duotone",
    },
  ];
</script>

<div
  class="flex flex-col gap-10 w-full p-5 md:p-20 pt-32 md:pt-40 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
>
  <div class="text-5xl font-extrabold text-center mb-10">Projects</div>

  <div class="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
    {#each projects as project}
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        class="relative flex flex-col p-10 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 shadow gap-3 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
      >
        <div
          class="absolute top-4 right-4 w-12 h-12 rounded-xl flex items-center justify-center {project.color ===
          'orange'
            ? 'bg-orange-100 dark:bg-orange-900/30'
            : project.color === 'purple'
            ? 'bg-purple-100 dark:bg-purple-900/30'
            : project.color === 'green'
            ? 'bg-green-100 dark:bg-green-900/30'
            : project.color === 'pink'
            ? 'bg-pink-100 dark:bg-pink-900/30'
            : 'bg-blue-100 dark:bg-blue-900/30'}"
        >
          <Icon
            icon={project.icon}
            width="24"
            height="24"
            class={project.color === "orange"
              ? "text-orange-600 dark:text-orange-400"
              : project.color === "purple"
              ? "text-purple-600 dark:text-purple-400"
              : project.color === "green"
              ? "text-green-600 dark:text-green-400"
              : project.color === "pink"
              ? "text-pink-600 dark:text-pink-400"
              : "text-blue-600 dark:text-blue-400"}
          />
        </div>
        <h1 class="text-3xl font-bold">{project.name}</h1>
        <p class="text-2xl">{project.description}</p>
      </a>
    {/each}
  </div>
</div>
