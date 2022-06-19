<template>
  <div id="projects">
    <Navbar/>

    <h2>Projects:</h2>

    <div class='card'>
      <h3>🍂 drop-game</h3>
      <p>
        An overlay game that reacts to a twitch chat
      </p>
      <a href="https://github.com/saravenpi/drop-game" target="_blank">github</a>
    </div>

    <div class='card'>
      <h3>📷 ascii_camera</h3>
      <p>
        A cli app that creates a live ascii art from your camera !
      </p>
      <a href="https://github.com/saravenpi/ascii_camera" target="_blank">github</a>
    </div>

    <div class='card'>
      <h3>⌨️ speed_typing_test</h3>
      <p>
        A cli speed typing test with random english words !
      </p>
      <a href="https://github.com/saravenpi/speed_typing_test" target="_blank">github</a>
    </div>
    
    <div class='card'>
      <h3>📦 uuids</h3>
      <p>
        This is an easy to use npm package to generate unique ID's for your projects !
      </p>
      <a href="https://github.com/saravenpi/uuids" target="_blank">github</a>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
  name: 'projects',
  components: {
    Navbar
  },
}
</script>

<style scoped>
.card h3 {
  text-decoration: bold;
}
</style>
