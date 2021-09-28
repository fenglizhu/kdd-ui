<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    
    <kdd-input name="123" age="456" sex="nv">
        <kdd-button type="primary" plain square block size="large" @click="alertTips()">
                <kdd-link href="http://localhost:8082/note/2784347" type="info" :underline="false" @click="alertTips()" v-bind="$attrs">基础链接</kdd-link>
                
            </kdd-button> 
    </kdd-input>
    
    
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
  },
  methods: {
      alertTips() {
        console.log(11111)
      }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body{
    -webkit-tap-highlight-color: transparent;
}
</style>
