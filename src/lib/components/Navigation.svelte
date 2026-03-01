<script>
  import { page } from "$app/stores";

  const sections = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
  ];

  function isActive(href, pathname) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  $: pathname = $page.url.pathname;
</script>

<nav>
  {#each sections as section}
    <a
      href={section.href}
      style={isActive(section.href, pathname) ? 'font-weight: bold;' : ''}
    >
      {section.label}
    </a>
  {/each}
</nav>
