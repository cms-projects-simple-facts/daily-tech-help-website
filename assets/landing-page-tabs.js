  import { createApp } from 'https://unpkg.com/petite-vue@0.2.2/dist/petite-vue.es.js'

  createApp({
    // exposed to all expressions
    currentTab: 'web-dev',
    // getters
    // get plusOne() {
    //   return this.count + 1
    // },
    // methods
    SwitchTab(item) {
      this.currentTab = item;
    }
  }).mount('#landingPage')