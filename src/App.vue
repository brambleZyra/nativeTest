<template>
  <div id="app">
    <transition name="slide-fade">
      <router-view  class="view-main"/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  async mounted () {
  },
  methods: {
  }
}
</script>
<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
