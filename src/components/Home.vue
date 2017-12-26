<template>
  <div id="home">
    <h1>{{$t('home')}}</h1>
    <img src=".././assets/raspberry.png" width="100">
    <div>
      <ui-switch name="switchInterruptor" v-model="interruptor" :label="$t('onOff')" @change="encenderApagar"></ui-switch>
    </div>
    <div>
      <ui-textbox name="uitextbox" v-model="texto" type="text" :placeholder="$t('Press microphone and speak')"></ui-textbox>
      <ui-fab size="small" color="red" ariaLabel="UiFab" icon="keyboard_voice" @click="escuchar"></ui-fab>
    </div>
    <div>
      <ui-textbox name="uitextbox" :value="volumen" @input="handleVolumen" type="number" :placeholder="$t('Volume control')" :min="0" :max="100"></ui-textbox>
      <ui-slider size="small" color="red" ariaLabel="UiSlider" v-model="volumen" :showMarker="true"></ui-slider>
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
  var dbRefStatistics = firebase.database().ref('/statistics')
  var dbRefStatisticsInterruptor = firebase.database().ref('/statistics/interruptor')
  var dbRefStatisticsInterruptorValue = firebase.database().ref('/statistics/interruptorValue')
  var dbRefStatisticsTextoValue = firebase.database().ref('/statistics/textoValue')
  var dbRefStatisticsVolumenValue = firebase.database().ref('/statistics/volumenValue')

  export default {
    name: 'home',
    data() {
      return {
        interruptor: false,
        texto: '',
        volumen: 0
      }
    },
    beforeCreate() {
      window.console.log('Esto se ejecuta ANTES de crear el componente Home.')
    },
    created() {
      window.console.log('Esto se ejecuta DESPUES de crear el componente Home.')
    },
    beforeMount() {
      window.console.log('Esto se ejecuta ANTES de montar el componente Home.')
      dbRefStatisticsInterruptorValue
        .on('value', snapshot => this.loadStatisticsInterruptorValue(snapshot.val()))
      dbRefStatisticsTextoValue
        .on('value', snapshot => this.loadStatisticsTextoValue(snapshot.val()))
      dbRefStatisticsVolumenValue
        .on('value', snapshot => this.loadStatisticsVolumenValue(snapshot.val()))
    },
    mounted() {
      window.console.log('Esto se ejecuta DESPUES de montar el componente Home.')
    },
    methods: {
      encenderApagar() {
        if (this.interruptor) {
          window.console.log('Encendí el interruptor')
        } else {
          window.console.log('Apagé el interruptor')
        }
        let ahora = moment().format('DD/MM/YYYY HH:mm:ss.sss')
        dbRefStatisticsInterruptor
          .push({
            fecha: ahora,
            nuevoValor: this.interruptor
          })
          .then(() => {
            window.console.log('Estadísticas registradas OK')
          })
        dbRefStatistics
          .update({
            interruptorValue: this.interruptor
          })
          .then(() => {
            window.console.log('Interruptor actualizado en BBDD OK')
          })
      },
      escuchar() {
        window.console.log('TODO Estoy escuchando durante n segundos ...')
      },
      loadStatisticsInterruptorValue(value) {
        window.console.log('Recupero valor actual del interruptor (BBDD)')
        this.interruptor = value
      },
      loadStatisticsTextoValue(value) {
        window.console.log('Recupero valor actual del texto (BBDD)')
        this.texto = value
      },
      loadStatisticsVolumenValue(value) {
        window.console.log('Recupero valor actual del volumen (BBDD)')
        this.volumen = parseInt(value)
      },
      handleVolumen(value) {
        this.volumen = parseInt(value)
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