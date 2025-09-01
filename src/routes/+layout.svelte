<script>
  import "../app.css";
  import Navigation from "$lib/components/Navigation.svelte";
  import FloatingContactButton from "$lib/components/FloatingContactButton.svelte";
  import { onMount } from "svelte";
  import { browser } from "$app/environment";

  function updateTheme() {
    if (!browser) return;
    
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  onMount(() => {
    updateTheme();
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', updateTheme);
    
    return () => {
      mediaQuery.removeEventListener('change', updateTheme);
    };
  });
</script>

<Navigation />
<slot />
<FloatingContactButton />
