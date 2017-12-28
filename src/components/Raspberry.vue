<template>
  <div id="raspberry">
    <h1>{{$t('raspberry')}}</h1>
    <ul>
      <li v-for="(value, key, index) in raspberries">
        {{index}} - {{key}} => {{value}}
      </li>
    </ul>
    <pre>Data: {{ $data }}</pre>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'raspberry',
    data() {
      return {
        raspberries: null
      }
    },
    beforeMount() {
      axios
        .get('http://localhost:9090/api/raspberry')
        .then(res => {
          console.log('Raspberries cargadas de api: ' + res.data)
          if (Array.isArray(res.data)) {
            this.raspberries = res.data
          } else {
            this.raspberries = [res.data]
          }
        })
        .catch(err => {
          console.log('¡¡Comprueba API BACK!!' + err)
        })
    }
  }
</script>

<style>
  #about {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>