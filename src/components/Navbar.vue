<template>
  <div class="topnav" id="myTopnav">
    <router-link to="/" active-link="home"> <a href="/">Home</a> </router-link>

    <router-link to="/skills" active-link="active"> <a href="/skills">My Skills</a> </router-link>
    <router-link to="/projects" active-link="active"> <a href="/projects">My Projects</a> </router-link>
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
  background-color: #f3c4fb;
  border-radius: 20px 20px 0 0 ;
}

.topnav a.active {
  background-color: #C0FDFF;
  color: #f3c4fb;
  font-weight: bold;
  text-decoration: none;

}
.topnav a.home {
  background-color: #C0FDFF;
  color: #f3c4fb;
  font-weight: bold;
  text-decoration: none;
  border-radius: 20px 0 0 0;
}

.topnav a  {
  float: left;
  border: none;
  font-size: 20px;
  text-decoration: none;
  color: black;
  display: block;
  background:  #f3c4fb;
  text-decoration: none;
  padding: 1em 1em;
}

/*.topnav a:hover {
  cursor: pointer;
  background-color: #E7E9EB;
}*/
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
