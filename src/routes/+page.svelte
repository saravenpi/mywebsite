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
                var info = `🎧 <span>&nbsp;Listening Now:&ensp;</span>`;
                var listening = `<a href="${lasttrack.url}" target=”_blank”>${title} by ${artist}`;
                music_text = info + listening;
            } else music_text = null;
        });
    });
</script>

<div>
    <div class="lg:m-28 m-10 rounded lg:p-10 p-2">
        <div class="flex flex-row gap-5 place-items-center mb-10">
            <img
                alt="avatar"
                src="https://avatars.githubusercontent.com/u/61117321"
                width="100em"
                class="rounded-full"
            />

            <div class="lg:text-4xl text-2xl mb-3">Hi I'm Saravenpi ! 👋</div>
        </div>

        <div class="text-xl mb-10 text-gray-k00">
            {#if music_text}
                {@html music_text}
            {/if}
        </div>

        <div class="text-xl mb-5">
            I'm a 22 years old software developer.
            <br />
            I'm currently studying computer science
        </div>

        <div class="flex flex-row gap-6">
            <div style="opacity: 1; transform: none;">
                <a
                    title="github"
                    href="https://github.com/saravenpi"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
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
            </div>

            <div style="opacity: 1; transform: none;">
                <a
                    title="twitter"
                    href="https://twitter.com/saravenpi"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
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
            </div>

            <div style="opacity: 1; transform: none;">
                <a
                    title="email"
                    href="mailto:saravenpi@tuta.io"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
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
    </div>
</div>

<style lang="postcss">
    :global(html) {
        background-color: white;
    }
</style>
