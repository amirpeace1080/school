<template>
  <div class="mb-4">
    <!-- start loading  -->
    <div class="loader" v-if="loading">Loading...</div>
    <!-- end loading -->

    <!-- start top content -->
    <h2>وسایل نقلیه</h2>
    <v-container class="mt-4 mb-5">
      <v-row>
        <v-flex xs12 sm6 lg6>
          <span class="subtitle-2" style="color: #757575"
            >۲۳۳۰ خودرو ثبت شده است</span
          >
        </v-flex>
      </v-row>
    </v-container>
    <!-- end top content-->

    <!-- start main page  -->
    <v-container class="">
      <v-row>
        <v-flex xs112 lg12>
          <v-card class="rounded-xl" elevation="" max-width="" height="700px">
            <v-img
              src="https://lh3.googleusercontent.com/proxy/svqJ1GE24up932sRY7HnWiZLCIVQhSsW8ykEDfqGTKKQylBRlUMAQnhH4a7qQloWdIKvZemzob9k0H7IrJWd8FGJDlQwFGs"
              height="700px"
            >
            <div style=" position: absolute; top: 18px; right: 26px;">
              <h2> {{ this.$store.state.vehicleItem.vehicle }} </h2>
              <h3 class="mt-2 mr-5"> {{ this.$store.state.vehicleItem.manufacturer }} </h3>
            </div>

            <!-- start bottom item  -->
            <div style="position: absolute; bottom: 8px; right:22px; width:100%">
               <v-container class="">
                  <v-row class="mt-4">
                    <v-flex xs4 sm3 lg2>
                      <span style="font-size:22px; font-weight:700">برند:</span><br>
                      <h3 class="mr-2 warning--text"> {{ this.$store.state.vehicleItem.manufacturer }} </h3>
                      <v-icon class="mr-5 mt-4" x-large color="green darken-2">mdi-domain</v-icon>
                    </v-flex>
                    <v-flex xs4 sm3 lg2>
                      <span style="font-size:22px; font-weight:700">مدل:</span><br>
                      <h3 class="mr-2 warning--text"> {{ this.$store.state.vehicleItem.model }} </h3>
                      <v-icon class="mr-5 mt-4" x-large color="blue darken-2">mdi-bus</v-icon>
                    </v-flex>
                    <v-flex xs4 sm3 lg2> 
                      <span style="font-size:22px; font-weight:700">نوع:</span><br>
                      <h3 class="mr-2 warning--text"> {{ this.$store.state.vehicleItem.type }} </h3>
                      <v-icon class="mr-5 mt-4" x-large color="red darken-22">mdi-file-image</v-icon>
                    </v-flex>
                    <v-flex xs4 sm3 lg2>
                      
                      <span style="font-size:22px; font-weight:700">سوخت:</span><br>
                      <h3 class="mr-2 warning--text"> {{ this.$store.state.vehicleItem.fuel }} </h3>
                      <v-icon class="mr-5 mt-4" x-large color="pink darken-2">mdi-engine</v-icon>
                    </v-flex>
                    <v-flex xs4 sm3 lg2>
                      <span style="font-size:22px; font-weight:700">رنگ:</span><br>
                      <h3 class="mr-2 warning--text"> {{ this.$store.state.vehicleItem.color }} </h3>
                      <v-icon class="mr-5 mt-4" x-large color="indigo lighten-2">mdi-format-color-fill</v-icon>
                    </v-flex>
                    <v-flex xs4 sm3 lg2>
                      
                      <span style="font-size:22px; font-weight:700">وین:</span><br>
                      <h3 class="mr-2 warning--text"> {{ this.$store.state.vehicleItem.vin }} </h3>
                      <v-icon class="mr-5 mt-4" x-large color="teal darken-1">mdi-google-controller</v-icon>
                    </v-flex>
                  </v-row>
                </v-container>
            </div>
            <!-- end bottom item  -->
            
            </v-img>
          </v-card>
        </v-flex>
      </v-row>
    </v-container>
    <!-- end main page  -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
    }
  },
  mounted() {
    this.loading = true
    this.$store
      .dispatch('getVehicleItem', { id: this.$route.params.id })
      .then((resp) => {
        this.loading = false
        resp.data
      })
  },
}
</script>

<style></style>
