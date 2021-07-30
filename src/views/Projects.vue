<template>
  <div id="projects">
    <div class="container">
      <Navbar/>
          <div class="content">
              Here I will show some interesting projects I'm working on !
          </div>

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
