<template>
  <div id="app">
    <Navbar class="mb-2" />
    <router-view class="pb-5" />
  </div>
</template>

<style>
*{
  padding: 0;
  margin: 0;
}

body {
    background-color: #c6ffe1;
}
.color{
    background-color: rgba(0, 0, 0, 0.212);
    border-radius: 20px;
}

</style>

<script>
import { mapActions } from 'vuex'
import Navbar from './components/Navbar'

export default {
  components: {
    Navbar
  },
  methods: {
    ...mapActions(['checkUser'])
  },
  created(){
    this.checkUser()
  }
}
</script>

