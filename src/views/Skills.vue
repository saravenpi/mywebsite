<template>
  <div id="skills">
    <Navbar/>
    <div class="content">
      <h2>Skills:</h2>

      I work with the following languages/frameworks:

      <ul>
        <li>*.html</li>
        <li>*.css</li>
        <li>*.js</li>
        <li>*.go</li>
        <li>*.cs</li>
        <li>*.py</li>
        <li>*.vue</li>
      </ul>
  </div>
</div>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
  name: 'skills',
  components: {
    Navbar
  }
}
</script>
