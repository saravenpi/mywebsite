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
      name: "DistiLife",
      description: "A distillation ERP software",
      url: "https://github.com/saravenpi/DistiLife",
      color: "blue",
      icon: "solar:chart-bold",
    },
  ];
</script>

<div class="flex flex-col gap-10 w-full p-5 md:p-20 pt-32 md:pt-40">
  <div class="text-5xl font-extrabold text-center mb-10">Projects</div>

  <div class="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
    {#each projects as project}
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        class="relative flex flex-col p-10 rounded-xl border-2 shadow gap-3 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
      >
        <div
          class="absolute top-4 right-4 w-12 h-12 rounded-xl flex items-center justify-center"
          class:bg-orange-100={project.color === 'orange'}
          class:dark:bg-orange-900/30={project.color === 'orange'}
          class:bg-purple-100={project.color === 'purple'}
          class:dark:bg-purple-900/30={project.color === 'purple'}
          class:bg-green-100={project.color === 'green'}
          class:dark:bg-green-900/30={project.color === 'green'}
          class:bg-pink-100={project.color === 'pink'}
          class:dark:bg-pink-900/30={project.color === 'pink'}
          class:bg-blue-100={project.color === 'blue'}
          class:dark:bg-blue-900/30={project.color === 'blue'}
        >
          <Icon
            icon={project.icon}
            width="24"
            height="24"
            class:text-orange-600={project.color === 'orange'}
            class:dark:text-orange-400={project.color === 'orange'}
            class:text-purple-600={project.color === 'purple'}
            class:dark:text-purple-400={project.color === 'purple'}
            class:text-green-600={project.color === 'green'}
            class:dark:text-green-400={project.color === 'green'}
            class:text-pink-600={project.color === 'pink'}
            class:dark:text-pink-400={project.color === 'pink'}
            class:text-blue-600={project.color === 'blue'}
            class:dark:text-blue-400={project.color === 'blue'}
          />
        </div>
        <h1 class="text-3xl font-bold">{project.name}</h1>
        <p class="text-2xl">{project.description}</p>
      </a>
    {/each}
  </div>
</div>
