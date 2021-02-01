<template>
  <div>
    <Navbar />
    <v-app >
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
