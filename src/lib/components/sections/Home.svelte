<script>
  import { onMount } from "svelte";

  let music_text = null;
  const url = "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=saravenpi&api_key=d2cafb7e30ed8b064a00fb67693d2a70&format=json";

  onMount(() => {
    fetch(url).then((response) => {
      response.json().then((data) => {
        const lasttrack = data.recenttracks.track[0];
        if (lasttrack["name"]) {
          const artist = lasttrack.artist["#text"];
          const title = lasttrack.name;
          music_text = `${title} by ${artist}`;
        }
      });
    });
  });
</script>

<main>
  <img
    alt="avatar"
    src="https://avatars.githubusercontent.com/u/61117321"
    class="avatar"
  />

  <h1>Hi I'm Saravenpi</h1>

  <p>I'm a 23 fullstack software developer</p>
  <p>Interested into decentralisation</p>

  <p>
    <a href="https://github.com/saravenpi" target="_blank" rel="noopener noreferrer">GitHub</a> |
    <a href="https://x.com/saravenpi" target="_blank" rel="noopener noreferrer">Twitter</a> |
    <a href="mailto:saravenpi@tuta.io">Email</a>
  </p>

  {#if music_text}
    <p style="margin-top: 2rem;">🎧 Listening Now: {music_text}</p>
  {/if}
</main>
