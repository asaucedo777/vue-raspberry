<template>
  <div id="app">
    <img src="./assets/raspberry.png" width="100">
    <div>
      <ui-switch name="switchInterruptor" v-model="interruptor" label="Encender/Apagar LUZ" @input="encenderApagar"></ui-switch>
    </div>
    <div>
      <ui-fab size="small" color="red" ariaLabel="UiFab" icon="keyboard_voice" @click="escuchar"></ui-fab>
      <ui-textbox name="uitextbox" v-model="texto" type="text" placeholder="Pulsa el micrófono y habla"></ui-textbox>
    </div>
    <div>
      <ui-fab size="small" color="red" ariaLabel="UiFab" icon="keyboard_pen" @click="obtenerVersion"></ui-fab>
      <ui-fab size="small" color="red" ariaLabel="UiFab" icon="keyboard_pen" @click="obtenerEstatistics"></ui-fab>
    </div>
    <div>
      <ui-slider size="small" color="red" ariaLabel="UiSlider" v-model="volumen"></ui-slider>
    </div>
    <pre>Data: {{ $data }}</pre>
  </div>
</template>

<script>
  import firebase from 'firebase'
  import moment from 'moment'
  
  // Initialize Firebase
  const config = {
    apiKey: 'AIzaSyARG35w5iFG5XAJrkXi4JDSMXSmYYMfho8',
    authDomain: 'fire-vue-rasp.firebaseapp.com',
    databaseURL: 'https://fire-vue-rasp.firebaseio.com',
    projectId: 'fire-vue-rasp',
    storageBucket: '',
    messagingSenderId: '374833323043'
  }
  firebase.initializeApp(config)
  const dbRefVersion = firebase.database().ref('/version')
  const dbRefStatistics = firebase.database().ref('/statistics')
  const dbRefStatisticsInterruptor = firebase.database().ref('/statistics/interruptor')
  
  export default {
    name: 'app',
    data () {
      return {
        dbRefVersion: dbRefVersion,
        dbRefStatistics: dbRefStatistics,
        dbRefStatisticsInterruptor: dbRefStatisticsInterruptor,
        versionApp: null,
        statistics: null,
        interruptor: false,
        texto: '',
        volumen: 0
      }
    },
    methods: {
      encenderApagar () {
        window.console.log('enciendeApaga')
        this.interruptor = !this.interruptor
        let ahora = moment().format('DD/MM/YYYY HH:mm:ss.sss')
        this.dbRefStatisticsInterruptor.push({
          fecha: ahora,
          nuevoValor: this.interruptor
        })
      },
      escuchar () {
        window.console.log('TODO Estoy escuchando durante n segundos ...')
      },
      obtenerVersion () {
        window.console.log('Obteniendo datos de BBDD')
        this.dbRefVersion
          .on('value', snapshot => this.cargarVersion(snapshot.val()))
      },
      cargarVersion (value) {
        window.console.log('Guardar en variable')
        this.versionApp = value
      },
      obtenerEstatistics () {
        window.console.log('Obteniendo datos de BBDD')
        this.dbRefStatistics
          .on('value', snapshot => this.cargarStatistics(snapshot.val()))
      },
      cargarStatistics (value) {
        window.console.log('Guardar en variable')
        this.statistics = value
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