<template>
  <div class="topnav" id="myTopnav">
    <router-link to="/" active-class="active" exact> Home </router-link>
    <router-link to="/skills" active-class="active" exact> Skills</router-link>
    <router-link to="/projects" active-class="active" exact> Projects </router-link>
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

<style scoped>

.topnav {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.topnav a.active {
  font-weight: bold;
  text-decoration: underline;
}

.topnav a.home {
  font-weight: bold;
  text-decoration: none;
  border-radius: 20px 0 0 0;
}

.topnav a  {
  float: left;
  border: none;
  font-size: 20px;
  color: white;
  display: block;
  text-decoration: none;
  padding-right: 1em;
  padding-bottom: 1em;
}

.topnav .icon {
  display: none;
}

@media only screen and (max-device-width : 640px) {
  .topnav a:not(:first-child) {display: none;}
  .topnav a.icon {
    float: right;
    display: block;
    border-radius: 0 20px 0 0;
  }

  .topnav.responsive {
    position: relative;
    border-radius: 0 20px 0 0;
  }
  .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>
