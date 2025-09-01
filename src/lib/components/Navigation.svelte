<script>
  import { page } from "$app/stores";
  import Icon from "@iconify/svelte";

  const sections = [
    {
      id: "home",
      label: "Home",
      href: "/",
      icon: "solar:home-2-bold-duotone",
    },
    {
      id: "projects",
      label: "Projects",
      href: "/projects",
      icon: "solar:code-square-bold-duotone",
    },
    {
      id: "blog",
      label: "Blog",
      href: "/blog",
      icon: "solar:notes-bold-duotone",
    },
  ];

  function getActiveSection(pathname) {
    if (pathname === "/") return "home";
    if (pathname.startsWith("/projects")) return "projects";
    if (pathname.startsWith("/blog")) return "blog";
    return "home";
  }

  $: activeSection = getActiveSection($page.url.pathname);
</script>

<!-- Desktop Navigation -->
<nav
  class="fixed top-0 left-0 right-0 z-50 justify-center items-center h-20 p-4 hidden md:flex"
>
  <div
    class="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-full shadow-lg border border-gray-200 dark:border-gray-700"
  >
    <div class="flex p-1 relative">
      <!-- Sliding pill background -->
      <div
        class="absolute inset-y-1 bg-green-600 dark:bg-green-400 rounded-full transition-all duration-300 ease-out"
        style="width: calc({100 /
          sections.length}% - 8px); left: calc({sections.findIndex(
          (s) => s.id === activeSection
        ) *
          (100 / sections.length)}% + 4px);"
      />

      {#each sections as section}
        <a
          href={section.href}
          class="relative flex items-center space-x-2 px-6 py-3 rounded-full text-sm font-medium transition-colors duration-200 z-10 min-w-[120px] justify-center
            {activeSection === section.id
            ? 'text-white'
            : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100'}"
        >
          <Icon icon={section.icon} width="20" height="20" />
          <span>{section.label}</span>
        </a>
      {/each}
    </div>
  </div>
</nav>

<!-- Mobile Navigation -->
<nav
  class="fixed bottom-4 left-4 right-4 z-50 flex justify-center items-center md:hidden"
>
  <div
    class="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-full shadow-lg border border-gray-200 dark:border-gray-700"
  >
    <div class="flex p-1 relative">
      <!-- Sliding pill background -->
      <div
        class="absolute inset-y-1 bg-green-600 dark:bg-green-400 rounded-full transition-all duration-300 ease-out"
        style="width: calc({100 /
          sections.length}% - 8px); left: calc({sections.findIndex(
          (s) => s.id === activeSection
        ) *
          (100 / sections.length)}% + 4px);"
      />

      {#each sections as section}
        <a
          href={section.href}
          class="relative flex items-center justify-center p-3 rounded-full text-sm font-medium transition-colors duration-200 z-10 w-14 h-14
            {activeSection === section.id
            ? 'text-white'
            : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100'}"
        >
          <Icon icon={section.icon} width="24" height="24" />
        </a>
      {/each}
    </div>
  </div>
</nav>
