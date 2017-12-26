<template>
  <div id="about">
    <h1>{{$t('about')}}</h1>
    <h2>{{$t('version')}} {{ $root.version }}</h2>
  </div>
</template>

<script>

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
