<script>
  import { page } from "$app/stores";

  const sections = [
    {
      id: "home",
      label: "Home",
      href: "/",
      icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    },
    {
      id: "projects",
      label: "Projects",
      href: "/projects",
      icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
    },
    {
      id: "blog",
      label: "Blog",
      href: "/blog",
      icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d={section.icon}
            />
          </svg>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d={section.icon}
            />
          </svg>
        </a>
      {/each}
    </div>
  </div>
</nav>
