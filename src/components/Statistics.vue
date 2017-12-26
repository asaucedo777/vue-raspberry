<template>
  <div id="statistics">
    <h1>{{$t('statistics')}}</h1>
    <ul>
      <li v-for="(value, key, index) in statistics.interruptor">
        {{value.fecha}} => {{value.nuevoValor}}
      </li>
    </ul>
  </div>
</template>

<script>
  import firebase from 'firebase'
  let statistics = {
    interruptor: []
  }
  const config = {
    apiKey: 'AIzaSyARG35w5iFG5XAJrkXi4JDSMXSmYYMfho8',
    authDomain: 'fire-vue-rasp.firebaseapp.com',
    databaseURL: 'https://fire-vue-rasp.firebaseio.com',
    projectId: 'fire-vue-rasp',
    storageBucket: '',
    messagingSenderId: '374833323043'
  }
  if (!firebase.apps.length) {
    firebase.initializeApp(config)
  }
  var dbRefStatistics = firebase.database().ref('/statistics')
  var dbRefStatisticsInterruptor = firebase.database().ref('/statistics/interruptor')

  export default {
    name: 'statistics',
    data() {
      return {
        statistics
      }
    },
    beforeCreate() {
      window.console.log('Esto se ejecuta ANTES de crear el componente Statistics.')
    },
    created() {
      window.console.log('Esto se ejecuta DESPUES de crear el componente Statistics.')
    },
    beforeMount() {
      window.console.log('Esto se ejecuta ANTES de montar el componente Statistics.')
      dbRefStatistics.on('value', snapshot => this.loadStatistics(snapshot.val()))
      dbRefStatisticsInterruptor.on('value', snapshot => this.loadStatisticsInterruptor(snapshot.val()))
    },
    mounted() {
      window.console.log('Esto se ejecuta DESPUES de montar el componente Statistics.')
    },
    methods: {
      loadStatistics(value) {
        window.console.log('cargo estadísticas')
        statistics = value
      },
      loadStatisticsInterruptor(value) {
        window.console.log('cargo estadísticas interruptor')
        statistics.interruptor = value
      }
    }
  }
</script>

<style>
</style>