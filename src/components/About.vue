<template>
  <div id="about">
    <h2>{{$t('about')}} {{ version }}</h2>
    <pre>{{ $data }}</pre>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'about',
    data() {
      return {
        version: null
      }
    },
    beforeMount() {
      window.console.log('Esto se ejecuta ANTES de montar el componente About')
      this.loadVersion()
    },
    methods: {
      loadVersion() {
        window.console.log('Cargo version API')
        axios.get('http://localhost:9090/api/version')
          .then((res) => {
            console.log('Version cargada de api: ' + res.data.version)
            this.version = res.data.version
          })
          .catch((err) => {
            console.log('¡¡Comprueba API BACK!!' + err)
          })
      }
    }
  }
</script>

<style>
  #about {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>