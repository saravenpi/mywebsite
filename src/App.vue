<template>

  <div id="app">
  <transition name="fade">
    <router-view :key="$route.path" />
  </transition>
</div>
</template>
