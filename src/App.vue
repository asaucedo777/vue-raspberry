<template>
  <div id="app">
    <div>
      <router-link to="/home">{{$t('home')}}</router-link>
      <router-link to="/statistics">{{$t('statistics')}}</router-link>
      <router-link to="/raspberry">{{$t('raspberry')}}</router-link>
      <router-link to="/about">{{$t('about')}}</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
      }
    },
    beforeCreate() {
      window.console.log('Esto se ejecuta ANTES de crear el componente App.')
    },
    created() {
      window.console.log('Esto se ejecuta DESPUES de crear el componente App.')
    },
    beforeMount() {
      window.console.log('Esto se ejecuta ANTES de montar el componente App.')
    },
    mounted() {
      window.console.log('Esto se ejecuta DESPUES de montar el componente App.')
    },
    watch: {
      $route(to) {
        if (to.name && to.name.indexOf('about') !== -1) {
          window.console.log('Navegación hacia la vista About')
        }
      }
    },
    methods: {
      methodApp() {
        window.console.log('Método de App')
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>