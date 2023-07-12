<script>
    var music_text = null
    var url = "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=saravenpi&api_key=d2cafb7e30ed8b064a00fb67693d2a70&format=json"
    fetch(url)
        .then(response => {
            response.json()
                .then(data => {
                    var lasttrack = data.recenttracks.track[0]
                    if (lasttrack["@attr"]) {
                        var artist = lasttrack.artist['#text']
                        var title = lasttrack.name
                        var info = `🎧 <span>&nbsp;Listening Now:&ensp;</span>`
                        var listening = `<a href="${lasttrack.url}" target=”_blank”>${title} by ${artist}`
                        music_text = info + "" + listening
                    }
                    else
                        music_text = null
                })
        })
</script>
<div>
    <div class="m-28 rounded p-10">
        <div class="grid grid-cols-4 mb-10 gap-4">
            <a href="/">
                <div class="text-xl bg-stone-500 rounded p-3 hover:bg-stone-400 text-white">
                    Home
                </div>
            </a>
            <a href="/projects">
                <div class="text-xl bg-stone-200 rounded p-3 hover:bg-stone-400">
                    Projects
                </div>
            </a>
            <a href="/skills">
                <div class="text-xl bg-stone-200 rounded p-3 hover:bg-stone-400">
                    Skills
                </div>
            </a>
        </div>

        <img src="https://avatars.githubusercontent.com/u/61117321" width="100em" class="rounded-full mb-10">
        <div class="text-2xl text-black">
            {{music_text}}
        </div>
        <div class="text-4xl mb-5">
            Hi I'm Saravenpi ! 👋
        </div>
        <div class="text-xl mb-5">
            I'm a 21 years old software developer.
            <br>
            I'm currently studying computer science
        </div>
        <div class="flex space-x-9">
            <div style="opacity: 1; transform: none;">
                <a title="twitter" href="https://twitter.com/saravenpi" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="hover:opacity-40 duration-500 transition-opacity dark:text-black">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                </a>
            </div>
            <div style="opacity: 1; transform: none;">
                <a title="discord" href="/discord" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="hover:opacity-40 duration-500 transition-opacity dark:text-black">
                        <circle cx="12" cy="12" r="4"></circle>
                        <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
                    </svg>
                </a>
            </div>
            <div style="opacity: 1; transform: none;">
                <a title="github" href="https://github.com/saravenpi" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="hover:opacity-40 duration-500 transition-opacity dark:text-black">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                        </path>
                    </svg>
                </a>
            </div>
            <div style="opacity: 1; transform: none;">
                <a title="email" href="mailto:saravenpi@tuta.io" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="hover:opacity-40 duration-500 transition-opacity dark:text-black">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z">
                        </path>
                        <polyline points="22,6 12,13 2,6">
                        </polyline>
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
