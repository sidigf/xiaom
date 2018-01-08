<template>
  <div id="app">
    <router-view/>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import TabBar from '@/components/TabBar/TabBar'
export default {
  created(){
    this.$store.dispatch('getData')
    this.$store.dispatch('getType')
  },
  components: {
    TabBar
  },
  methods:{
  }
}
</script>
<style>
</style>
