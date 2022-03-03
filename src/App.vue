<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div class="switch-language">
        <select name="lang" @change="onLangChange">
            <option value="en-US" :selected="$i18n.locale == 'en-US'">English</option>
            <option value="zh-CN" :selected="$i18n.locale == 'zh-CN'">中文</option>
        </select>
    </div>
    <h3>{{ $t('pages.test.smallfriend') }}</h3>
    <h3>{{ $t('pages.test.greet') }}</h3>
    <h3>{{ $t('pages.test.hello-i18n') }}</h3>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
      return {

      }
  },
  methods:{
      onLangChange(val){
          this.$i18n.locale = val.srcElement.value
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
</style>
