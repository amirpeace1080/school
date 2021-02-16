<template>
  <div>
          <v-btn small elevation="22" color="" @click="aa"> click me</v-btn>
      
  </div>
</template>

<script>
export default {
    data() {
        return {
            //
        }
    },
    methods: {
        aa(){
            this.$swal('Any fool can use a computer')
        }
    },
}
</script>

<style>

</style>