<template>
  <div id="projects">
    <div class="container">
      <Navbar/>
          <div class="content">
            <div class="card_container">
              <div class='card'>
                <h2>📑 task-manager</h2>
                <p>
                  A simple task manager, organise yourself with a homemade solution!
                </p>
                <a href="https://github.com/saravenpi/task-manager" target="_blank"><i class="fab fa-github icon"></i></a>

              </div>
              <div class='card'>
                <h2>🌐 devhub-client</h2>
                <p>
                  Web client for the backend only social media for developers "DevHub" !
                </p>
                <a href="https://github.com/saravenpi/devhub-client" target="_blank"><i class="fab fa-github icon"></i></a>

              </div>
              <div class='card'>
                <h2>📦 uuids</h2>
                <p>
                  This is an easy to use npm package to generate unique ID's for your projects !
                </p>
                <a href="https://github.com/saravenpi/uuids" target="_blank"><i class="fab fa-github icon"></i></a>

              </div>
              <div class='card'>
                <h2>🌙 dream-journal</h2>
                <p>
                  A simple dream journal created with ElectronJS and VueJS to record your dreams !
                </p>
                <a href="https://github.com/saravenpi/dream-journal" target="_blank"><i class="fab fa-github icon"></i></a>

              </div>
            </div>
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

<style scoped>
.card_container {
  display: flex;
  flex-wrap: nowrap;
}
.card_container > .card {
  width: 300px;
  border-radius: 20px;
  padding: 20px;
  margin: 10px;
  background-color: #C0FDFF;
  box-shadow:  0 46px 12px -16px hsla(0, 0%, 0%, 0.05);
}
@media only screen and (max-device-width : 640px) {
  .card_container {
    display: block;
    flex-wrap: nowrap;
  }
  .card_container > .card {
    width: auto;
    border-radius: 20px;
    padding: 20px;
    background-color: #C0FDFF;
    box-shadow:  0 46px 12px -16px hsla(0, 0%, 0%, 0.05);
  }

}


</style>
