<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> maxlength="30" showWordLimit -->
    <div style="display:flex">
        <kdd-input type="textarea" v-model="valueName" @input="changeValue" @focus="focus" placeholder="请输入" ariaLabel="用户名" rows="5">
            <!-- <div slot="append">.com</div>
            <div slot="prepend">https://</div> -->
            <div slot="suffix">456</div>
        </kdd-input>
        <kdd-button type="danger"  size="small">基础按钮</kdd-button> 
    </div>
    
    <kdd-link href="http://localhost:8082/note/2784347" type="primary" :underline="false" @click="alertTips()" target="_blank">基础链接</kdd-link>
    
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
  },
  data() {
      return {
          valueName: ''
      }
  },
  methods: {
      changeValue(value) {
        //   console.log(value);
          console.log(this.valueName);
      },
      focus(event) {
        //   console.log(event);
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
