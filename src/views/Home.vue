<template>
  <div id="home">
      <div class="container">
        <Navbar/>

          <div class="content">
            <div id="music-status">

            </div>
              <h1>
                <div class="profile">
                  <img src="https://avatars.githubusercontent.com/u/61117321" class="avatar"> <div class="username"> Saravenpi</div>
                </div>
              </h1>

                  Hello, my name is Sara and I'm web developer! I'm constantly learning new languages and frameworks!
                  <p>
                    <a href="https://twitter.com/saravenpi" target="_blank"><i class="fab fa-twitter icon"></i></a>
                    <a href="https://github.com/saravenpi" target="_blank"><i class="fab fa-github icon"></i></a>
                    <a href="https://discord.gg/pJQJcenWY7" target="_blank"><i class="fab fa-discord icon"></i></a>
                  </p>

                  <h1>Donate:</h1>
                  <a href="https://buymeacoffee.com/saravenpi" target="_blank"><div class="donate">Buy me a coffee</div></a>
          </div>

      </div>

    </div>


</template>
<!--<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>-->


<script>
import Navbar from '../components/Navbar.vue'

export default {
  name: 'app',
  components: {
    Navbar
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
          document.getElementById("music-status").innerHTML =  info + listening

        } else {
            document.getElementById("music-status").innerHTML = null
        }

      })
    })
  }
}
</script>



<style src="../assets/style.css">

</style>
