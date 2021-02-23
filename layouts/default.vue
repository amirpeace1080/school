<template>
  <div>
    <Navbar />
    <v-app style="background-color: #eee">
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  components:{
    Navbar
  },
  data() {
    return {
      //
    }
  },
}
</script>

<style lang="scss">
  html, body, div, v-app, v-main, v-container{
    font-family: 'Vazir', sans-serif;
  }
  a{
    text-decoration: none;
  }
  a:hover{
    text-decoration: none;
  }
</style>
