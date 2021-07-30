<template>
  <div class="topnav" id="myTopnav">
    <a href="/" class="home">Home</a>
    <a href="/skills">My Skills</a>
    <a href="/projects">My Projects</a>
    <a href="javascript:void(0);" class="icon" onclick="myFunction()">
      <i class="material-icons">menu</i>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Navbar'

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
