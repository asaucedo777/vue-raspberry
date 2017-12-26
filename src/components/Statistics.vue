<template>
  <div id="statistics">
    <h1>{{$t('statistics')}}</h1>
    <ul>
      <li v-for="(value, key, index) in statistics.interruptor">
        {{value.fecha}} : {{value.nuevoValor}}
      </li>
    </ul>
    <pre>{{statistics}}</pre>
  </div>
</template>

<script>
  import firebase from 'firebase'
  let lista = [[{ 'fecha': 'FECHA' }, { 'nuevoValor': 'NUEVO_VALOR' }]]
  let statistics = {
    interruptor: lista
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
  var dbRefStatisticsInterruptor = firebase.database().ref('/statistics/interruptor')
  function cargaStatisticsInterruptor(value) {
    window.console.log('Cargando estádisticas del interruptor')
    statistics.interruptor = value
  }
  dbRefStatisticsInterruptor.on('value', snapshot => cargaStatisticsInterruptor(snapshot.val()))
  export default {
    name: 'statistics',
    data() {
      return {
        statistics
      }
    }
  }
</script>

<style>
</style>