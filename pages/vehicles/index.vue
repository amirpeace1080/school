<template>
  <div>
    <!-- start loading  -->
    <div class="loader" v-if="loading">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
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
        <v-flex
        class="item-main"
          xs12
          sm6
          lg3
          v-for="(veh, index) in this.$store.state.vehicle"
          :key="index"
        >
        <nuxt-link :to="{path: `/vehicles/${veh.id}`}">
          <v-container>
            <v-card
              class=""
              elevation="12"
              max-width=""
              color="blue lighten-3"
              height="300px"
            >
              <div src="" style="width: 100%; height: 100px"></div>

              <v-container>
                <v-card
                  class=""
                  elevation=""
                  max-width="100%"
                  height="40"
                  color="blue lighten-3"
                  style="overflow: hidden"
                >
                  <v-row>
                    <v-col cols="5">
                      <span
                        class="mr-2 font-weight-black"
                        style="font-size: 13px"
                        >وسیله نقلیه</span
                      >
                    </v-col>
                    <v-col cols="7">
                      <span
                        class="body-2"
                        style="position: absolute; left:4px; width:130px; height: 100% overflow: hidden"
                      >
                        {{ veh.vehicle }}
                      </span>
                    </v-col>
                  </v-row>
                </v-card>
                <!-- item two  -->
                <v-card
                  class=""
                  elevation=""
                  max-width="100%"
                  height="40"
                  color="blue lighten-3"
                  style="overflow: hidden"
                >
                  <v-row style="margin-top:1.5px">
                    <v-col cols="5">
                      <span
                        class="mr-2 font-weight-black"
                        style="font-size: 13px"
                        >تولید کننده</span
                      >
                    </v-col>
                    <v-col cols="7">
                      <span
                        class="body-2"
                        style="position: absolute; left:4px; width:130px; height: 100% overflow: hidden"
                      >
                        {{ veh.manufacturer }}
                      </span>
                    </v-col>
                  </v-row>
                </v-card>
                <!-- item three  -->
                <v-card
                  class=""
                  elevation=""
                  max-width="100%"
                  height="40"
                  color="blue lighten-3"
                  style="overflow: hidden"
                >
                  <v-row style="margin-top:1px">
                    <v-col cols="5">
                      <span
                        class="mr-2 font-weight-black"
                        style="font-size: 13px"
                        >مدل</span
                      >
                    </v-col>
                    <v-col cols="7">
                      <span
                        class="body-2"
                        style="position: absolute; left:4px; width:130px; height: 100% overflow: hidden"
                      >
                        {{ veh.model }}
                      </span>
                    </v-col>
                  </v-row>
                </v-card>

                <!-- item four  -->

                <v-card
                  class=""
                  elevation=""
                  max-width="100%"
                  height="40"
                  color="blue lighten-3"
                  style="overflow: hidden"
                >
                  <v-row style="margin-top:1px">
                    <v-col cols="5">
                      <span
                        class="mr-2 font-weight-black"
                        style="font-size: 13px"
                        >سوخت</span
                      >
                    </v-col>
                    <v-col cols="7">
                      <span
                        class="body-2"
                        style="position: absolute; left:4px; width:130px; height: 100% overflow: hidden"
                      >
                        {{ veh.fuel }}
                      </span>
                    </v-col>
                  </v-row>
                </v-card>

              </v-container>
            </v-card>
          </v-container>
          </nuxt-link>
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
    this.$store.dispatch('getVehicles').then((resp) => {
      this.loading = false
      resp.data
    })
  },
}
</script>

<style>
.item-main:hover{
    transform: rotateY(-3px);
    box-shadow: 0 1rem 2rem rgba(0, 0,0,2);
}
.item-main:active{
    transform: rotateY(-1px);
    box-shadow: 0 .5rem 1rem rgba(0, 0, 0,2);
}
</style>
