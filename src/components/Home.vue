<template>
  <div id="home">
    <h1>{{$t('home')}}</h1>
    <img src=".././assets/raspberry.png" width="100">
    <div>
      <ui-switch name="switchInterruptor" v-model="interruptor" :label="$t('onOff')" @input="encenderApagar"></ui-switch>
    </div>
    <div>
      <ui-textbox name="uitextbox" v-model="texto" type="text" :placeholder="$t('Press microphone and speak')"></ui-textbox>
      <ui-fab size="small" color="red" ariaLabel="UiFab" icon="keyboard_voice" @click="escuchar"></ui-fab>
    </div>
    <div>
      <ui-textbox name="uitextbox" v-model="texto" type="text" :placeholder="$t('Press to get statistics')"></ui-textbox>
      <ui-fab size="small" color="red" ariaLabel="UiFab" icon="keyboard_pen" @click="obtenerEstatistics"></ui-fab>
    </div>
    <div>
      <ui-textbox name="uitextbox" v-model="texto" type="text" :placeholder="$t('Volume control')"></ui-textbox>
      <ui-slider size="small" color="red" ariaLabel="UiSlider" v-model="volumen"></ui-slider>
    </div>
    <pre>Data: {{ $data }}</pre>
  </div>
</template>

<script>
  // To manage dates
  import moment from 'moment'
  // Initialize Firebase
  import firebase from 'firebase'
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
  const dbRefStatistics = firebase.database().ref('/statistics')
  const dbRefStatisticsInterruptor = firebase.database().ref('/statistics/interruptor')

  export default {
    name: 'home',
    data() {
      return {
        interruptor: false,
        texto: '',
        volumen: 0,
        dbRefStatistics,
        dbRefStatisticsInterruptor,
        statistics: null
      }
    },
    methods: {
      encenderApagar() {
        window.console.log('enciendeApaga')
        this.interruptor = !this.interruptor
        let ahora = moment().format('DD/MM/YYYY HH:mm:ss.sss')
        dbRefStatisticsInterruptor.push({
          fecha: ahora,
          nuevoValor: this.interruptor
        })
      },
      escuchar() {
        window.console.log('TODO Estoy escuchando durante n segundos ...')
      },
      obtenerEstatistics() {
        window.console.log('Obteniendo datos de BBDD')
        this.dbRefStatistics
          .on('value', snapshot => this.cargarStatistics(snapshot.val()))
      },
      cargarStatistics(value) {
        window.console.log('Guardar en variable')
        this.statistics = value
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