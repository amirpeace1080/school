<template>
  <div>
      <!-- start loading  -->
    <div class="loader" v-if="loading">Loading...</div>
    <!-- end loading -->

    <!-- start top content -->
    <h2>وسایل نقلیه</h2>
    <!-- <v-container class="mt-4 mb-5">
      <v-row>
        <v-flex xs12 sm6 lg6>
          <span class="subtitle-2" style="color: #757575"
            >۲۳۳۰ کاربر ثبت شده است</span
          >
        </v-flex>
      </v-row>
    </v-container> -->
    <!-- end top content -->

    <!-- start main page  -->
     <v-container class="">
        <v-row>
          <v-flex xs12 sm6 lg3 v-for="(veh, index) in this.$store.state.vehicle" :key="index">
              <v-container>
                  <v-card
                  class=""
              elevation="12"
                  max-width=""
                  color="blue lighten-3"
                  height="300px"
                >
                <div src="" style="width:100%; height:100px"></div>
                
                <v-container>
                    
                <v-card
                    class=""
                elevation=""
                    max-width="100%"
                    height="40"
                    color="blue lighten-3"
                  >
                <v-row>
                  <v-col cols="5">
                  <span class="mr-2 font-weight-black" style="font-size:13px">وسیله نقلیه :</span>
                  </v-col>
                  <v-col cols="7" style="overflow: hidden">
                  <span class="body-2" style="position: absolute; left:4px; overflow: hidden"> {{ veh.vehicle }} </span>
                  </v-col>
                  </v-row>
                  </v-card>
                  <v-card
                    class="mt-1"
                elevation=""
                    max-width="100%"
                    height="40"
                    color="blue lighten-3"
                  >
                  
                  </v-card>
                  <v-card
                    class="mt-1"
                elevation=""
                    max-width="100%"
                    height="40"
                    color="blue lighten-3"
                  >
                  
                  </v-card>
                  
                  <v-card
                    class="mt-1"
                elevation=""
                    max-width="100%"
                    height="40"
                    color="blue lighten-3"
                  >
                  
                  </v-card>
                </v-container>

                </v-card>
              </v-container>
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
            loading: false
        }
    },
    mounted() {
        this.loading = true
        this.$store.dispatch("getVehicles").then((resp) =>{
            this.loading = false
            resp.data
        })
    },
}
</script>

<style>

</style>