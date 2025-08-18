<script>
  var music_text = null;
  var url =
    "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=saravenpi&api_key=d2cafb7e30ed8b064a00fb67693d2a70&format=json";

  fetch(url).then((response) => {
    response.json().then((data) => {
      var lasttrack = data.recenttracks.track[0];
      if (lasttrack["name"]) {
        var artist = lasttrack.artist["#text"];
        var title = lasttrack.name;
        var info = `🎧 Listening Now&nbsp;`;
        var listening = ` <a href="${lasttrack.url}" target=”_blank” class="hover:underline font-bold">${title} by ${artist}`;
        music_text = info + listening;
      } else music_text = null;
    });
  });
</script>

<div class="flex flex-col justify-between h-[100svh] w-full">
  <div />
  <div class="w-full flex flex-col gap-6 rounded p-5 md:p-52">
    <!-- Card -->
    <div class="flex flex-row gap-3 md:gap-6 items-center">
      <img
        alt="avatar"
        src="https://avatars.githubusercontent.com/u/61117321"
        class="rounded-full w-[6em] md:w-[10em]"
      />

      <div class="text-3xl md:text-6xl font-extrabold">Hi I'm Sara</div>
    </div>

    <!-- About -->
    <div class="text-xl md:text-3xl flex flex-col gap-3">
      <p>I'm a 23 fullstack software developer</p>
      <p>I'm currently studying computer science</p>
    </div>

    <!-- Links -->
    <div class="flex flex-row gap-6">
      <a
        title="github"
        href="https://github.com/saravenpi"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="hover:opacity-40 duration-500 transition-opacity dark:text-black"
        >
          <path
            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
          />
        </svg>
      </a>

      <a
        title="twitter"
        href="https://x.com/saravenpi"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="hover:opacity-40 duration-500 transition-opacity dark:text-black"
        >
          <path
            d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
          />
        </svg>
      </a>

      <a
        title="email"
        href="mailto:saravenpi@tuta.io"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="hover:opacity-40 duration-500 transition-opacity dark:text-black"
        >
          <path
            d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
          />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      </a>
    </div>
  </div>

  <!-- Listening Now -->
  <div
    class="w-full md:flex flex-row md:justify-end text-md md:text-2xl text-gray-600 p-5 md:p-10"
  >
    {#if music_text}
      {@html music_text}
    {/if}
  </div>
</div>

<div class="flex flex-col gap-10 w-full p-5 md:p-20">
  <div class="text-5xl font-extrabold text-center mb-10">Projects</div>

  <!-- Projects -->
  <div class="flex flex-row flex-wrap gap-16 justify-center w-full">
    <div
      class="flex flex-col p-10 rounded-xl w-full border-2 shadow gap-3 md:w-[28em] md:h-max"
    >
      <h1 class="text-3xl font-bold">DistiLife</h1>
      <p class="text-2xl">A distillation ERP software</p>
    </div>

    <div
      class="flex flex-col p-10 rounded-xl border-2 shadow gap-3 md:w-[28em] md:h-max"
    >
      <h1 class="text-3xl font-bold">Poopometer</h1>
      <p class="text-2xl">The AI world crisis indicator</p>
    </div>

    <div
      class="flex flex-col p-10 rounded-xl w-full border-2 shadow md:w-[28em] md:h-max"
    >
      <h1 class="text-3xl font-bold">Marcel</h1>
      <p class="text-2xl">Turn your life organisation into a game</p>
    </div>

    <div
      class="flex flex-col p-10 rounded-xl w-full border-2 shadow gap-3 md:w-[28em] md:h-max"
    >
      <h1 class="text-3xl font-bold">Wave</h1>
      <p class="text-2xl">A C HTTP server library</p>
    </div>

    <div
      class="flex flex-col p-10 rounded-xl w-full border-2 shadow gap-3 md:w-[28em] md:h-max"
    >
      <h1 class="text-3xl font-bold">Brain.h</h1>
      <p class="text-2xl">A C neural network library</p>
    </div>
  </div>
</div>
