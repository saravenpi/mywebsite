<template>
  <div id="home">
    <Navbar/>
     <div id="music-status"></div>
     <div class="title">
        Saravenpi
        <br>
        =========
      </div>

      <p>
       Hello, my name is Sara and I'm a developer!
      </p>

      <h2>Contact:</h2>
      <ul>
        <li>
          <a href="https://twitter.com/saravenpi" target="_blank">twitter</a>
        </li>

        <li>
          <a href="https://github.com/saravenpi" target="_blank">github</a>
        </li>

        <li>
          <a href="https://discord.gg/pJQJcenWY7" target="_blank">discord</a>
        </li>
      </ul>

      <h2>Donate:</h2>

      <a href="https://buymeacoffee.com/saravenpi" target="_blank">
        <div class="donate">
          Buy me a coffee
        </div>
      </a>
  </div>
</template>


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



<style src="../assets/style.css"></style>
