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
  name: 'Navbar',
  methods : {
    myFunction: function () {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }

  }
}

</script>
