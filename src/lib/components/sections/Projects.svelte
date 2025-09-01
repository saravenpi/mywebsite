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
          class="absolute top-4 right-4 w-12 h-12 bg-{project.color}-100 dark:bg-{project.color}-900/30 rounded-xl flex items-center justify-center"
        >
          <Icon
            icon={project.icon}
            width="24"
            height="24"
            class="text-{project.color}-600 dark:text-{project.color}-400"
          />
        </div>
        <h1 class="text-3xl font-bold">{project.name}</h1>
        <p class="text-2xl">{project.description}</p>
      </a>
    {/each}
  </div>
</div>
