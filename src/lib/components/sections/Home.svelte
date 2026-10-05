<script>
  import { onMount } from "svelte";
  let music_text = null;
  let albumArt = null;
  const url = "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=saravenpi&api_key=d2cafb7e30ed8b064a00fb67693d2a70&format=json";
  onMount(() => {
    fetch(url).then((response) => {
      response.json().then((data) => {
        const lasttrack = data.recenttracks.track[0];
        if (lasttrack["name"]) {
          const artist = lasttrack.artist["#text"];
          const title = lasttrack.name;
          music_text = `${title} by ${artist}`;

          const images = lasttrack.image;
          if (images && images.length > 0) {
            albumArt = images[images.length - 1]["#text"] || images[2]?.["#text"];
          }
        }
      });
    });
  });
</script>

<main>
  <img alt="avatar" src="https://avatars.githubusercontent.com/u/61117321" class="avatar" />
  <h1>Hi I'm Saravenpi</h1>
  <p>I'm a fullstack software developer</p>
  <p>Love OSS and decentralized tech</p>
  <p>
    <a href="https://github.com/saravenpi" target="_blank" rel="noopener noreferrer">GitHub</a> |
    <a href="https://x.com/saravenpi" target="_blank" rel="noopener noreferrer">Twitter</a> |
    <a href="mailto:saravenpi@tuta.io">Email</a>
  </p>
  {#if music_text}
    <div class="now-playing">
      <div class="music-info">
        {#if albumArt}
          <img src={albumArt} alt="Album art" class="album-art" />
        {/if}
        <div>
          <p class="listening-label">🎧 Listening Now</p>
          <p class="track-info">{music_text}</p>
        </div>
      </div>
    </div>
  {/if}
</main>

<style>
  .now-playing {
    margin-top: 2rem;
    padding: 1rem;
    background: var(--subtle);
  }

  .music-info {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .album-art {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  .listening-label {
    font-size: 0.9rem;
    opacity: 0.8;
    margin: 0;
  }

  .track-info {
    font-weight: bold;
    margin: 0.25rem 0 0 0;
  }

  @media (max-width: 600px) {
    .album-art {
      width: 60px;
      height: 60px;
    }

    .music-info {
      gap: 0.75rem;
    }
  }
</style>
