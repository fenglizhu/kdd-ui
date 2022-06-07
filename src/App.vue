<template>
  <div id="app">
    <div v-for="item in pictures" :key="item">
      {{item}}
    </div>
    <div style="display:flex">
      <kdd-input v-model="valueName" @input="changeValue" @focus="focus" maxlength="30"  placeholder="请输入" ariaLabel="用户名" clearable showWordLimit>
        <div slot="prefix" class=" iconfont icon-suo"></div>
        <div slot="suffix" class=" iconfont icon-suo"></div>
      </kdd-input>
      <kdd-button type="danger"  size="small">基础按钮</kdd-button> 
    </div>
    
    <kdd-link href="http://localhost:8082/note/2784347" type="primary" :underline="false" @click="alertTips()" target="_blank">基础链接</kdd-link>
    <kdd-video-upload></kdd-video-upload>
    <div>
      <kdd-picture 
        :pictures="pictures" 
        :radius="true"
        @click="clickHandler">
      </kdd-picture>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      valueName: '',
      pictures: [
        'https://img0.baidu.com/it/u=502218550,162991900&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500',
        'https://img2.baidu.com/it/u=2375295774,2938619881&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
        'https://img2.baidu.com/it/u=2375295774,2938619881&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
        'https://img2.baidu.com/it/u=2375295774,2938619881&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
        'https://img2.baidu.com/it/u=2375295774,2938619881&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
        'https://img2.baidu.com/it/u=2375295774,2938619881&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
        'https://img2.baidu.com/it/u=2375295774,2938619881&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
        'https://img2.baidu.com/it/u=2375295774,2938619881&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
        'https://img2.baidu.com/it/u=2375295774,2938619881&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
        'https://img2.baidu.com/it/u=2375295774,2938619881&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
      ]
    }
  },
  methods: {
    changeValue(value) {
      console.log(this.valueName);
    },
    focus(event) {},
    clickHandler(item, index) {
      console.log(item, index);
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
  width: 600px;
}
body{
    -webkit-tap-highlight-color: transparent;
}
</style>
