<script>
  import "../app.css";
  import Navigation from "$lib/components/Navigation.svelte";
  import FloatingContactButton from "$lib/components/FloatingContactButton.svelte";
</script>

<Navigation />
<slot />
<FloatingContactButton />
