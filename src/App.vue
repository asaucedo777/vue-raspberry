<template>
  <div id="app">
    <img src="./assets/raspberry.png">
    <h1>Operaciones</h1>
    <div>
      <ui-switch name="switchInterruptor" v-model="interruptor" label="UiSwitch"></ui-switch>
    </div>
    <div>
      <ui-fab size="small" color="red" ariaLabel="UiFab" icon="keyboard_voice" @click="escuchar"></ui-fab>
      <ui-textbox name="uitextbox" v-model="texto" type="text" placeholder="Pulsa el micrófono y habla"></ui-textbox>
    </div>
    <div>
      <ui-slider size="small" color="red" ariaLabel="UiSlider" v-model="volumen"></ui-slider>
    </div>
    <pre>{{ $data }}</pre>
  </div>
</template>

<script>
  // import VButton from '@/components/VButton'
  export default {
    name: 'app',
    data () {
      return {
        interruptor: false,
        texto: '',
        volumen: 0
      }
    },
    methods: {
      encenderApagar () {
        window.console.log('enciendeApaga')
        this.interruptor = !this.interruptor
      },
      escuchar () {
        window.console.log('TODO Estoy escuchando durante n segundos ...')
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>