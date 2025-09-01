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

<svelte:head>
  <!-- Favicon -->
  <link rel="icon" href="/favicon.jpg" type="image/jpeg" />
  <link rel="shortcut icon" href="/favicon.jpg" type="image/jpeg" />
  <link rel="apple-touch-icon" href="/favicon.jpg" />
  
  <!-- Meta Images -->
  <meta property="og:image" content="/favicon.jpg" />
  <meta property="og:image:type" content="image/jpeg" />
  <meta property="og:image:width" content="512" />
  <meta property="og:image:height" content="512" />
  <meta name="twitter:image" content="/favicon.jpg" />
  <meta name="twitter:image:type" content="image/jpeg" />
</svelte:head>

<Navigation />
<slot />
<FloatingContactButton />
