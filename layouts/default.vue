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
  a{
    text-decoration: none;
  }
  a:hover{
    text-decoration: none;
  }
</style>
