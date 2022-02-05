<template>
  <div>
    <NavBar />
    <Home />
  </div>
</template>

<script>
import Home from './components/Home.vue';
import NavBar from './components/nav-bar/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    Home,
  },
};
</script>

<style lang="scss">
@import './assets/style.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
