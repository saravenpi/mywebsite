<template>
  <div id="home">
      <div class="container">
        <Navbar/>

          <div class="content">
            <p id="music-status" v-model="music_status">

            </p>
              <h1>
                <div class="profile">
                  <img src="https://avatars.githubusercontent.com/u/61117321" class="avatar"> <div class="username"> Saravenpi</div>
                </div>
              </h1>

              <p>
                  Hello, my name is Sara and I'm a fullstack web developer! I'm constantly learning new languages and frameworks!

                  <h1>Contact:</h1>
                    Get in touch with me on Twitter/Telegram/Github <a href="https://twitter.com/saravenpi"><code>@saravenpi</code></a>

                  <h1>Donate:</h1>
                    <script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="saravenpi" data-color="#C0FDFF" data-emoji="" data-font="Poppins" data-text="Buy me a coffee" data-outline-color="#000000" data-font-color="#000000" data-coffee-color="#FFDD00" ></script>
              </p>
          </div>

      </div>

    </div>


</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'home',
  components: {
    Navbar
  },
  data() {
    return {
      music_status: ""
    }
  },
  created: function () {

    fetch("https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=saravenpi&api_key=d2cafb7e30ed8b064a00fb67693d2a70&format=json")
    .then(function(response){
      response.json().then(data => {
        var lasttrack = data.recenttracks.track[0]
        if (lasttrack["@attr"]) {
          var artist = lasttrack.artist['#text']
          var title = lasttrack.name
          var info = `<i class="material-icons">headphones</i><span>&nbsp;Listening Now:&ensp;</span>`
          var listening = `<a href="${lasttrack.url}" target=”_blank”>${title} by ${artist}`
          this.music_status = info + listening

        }

      })
    })
  }
}
</script>



<style src="./assets/style.css">

</style>
