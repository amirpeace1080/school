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
  <v-main>
    <Footer />
  </v-main>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  components:{
    Navbar,
    Footer
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
