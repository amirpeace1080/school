<template>
  <div>
    <!-- start loading  -->
    <div class="loader" v-if="loading">Loading...</div>
    <!-- end loading -->

    <!-- start top content -->
    <h2>لیست محصولات</h2>
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
        <v-flex xs12 sm6 lg3 v-for="(user, index) in this.$store.state.products" :key="index">
          <v-container>
            <v-card class="card-item-main rounded-xl" elevation="4" max-width="100%" height="390px">
              <v-container class="mt-3">
                <v-card class="card-item-image rounded-xl" color="#eee" max-width="94%" height="190px">
                   <v-icon class="mt-2 mr-2" color="dark">mdi-star-outline</v-icon>
                  
                </v-card>
                <div class="mt-4 mr-3">
                  <span class="msubtitle-1"> {{ user.type}} </span><br>
                <span class="subtitle-2"> {{ user.name }} </span>
                </div>
                <h3 class="d-flex justify-center mt-3"> ${{ user.price }} </h3>
                <v-btn class="mt-3 rounded-xl add-to-cart" width="100%" large color="warning">
                  <nuxt-link :to="{path: `/products/${user.id}`}">
                    <h3 style="color:white"> مشخصات محصول </h3>
                  </nuxt-link>
                </v-btn>
                
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
      loading: false,
    }
  },
  mounted() {
    this.loading = true
    this.$store.dispatch('getProducts').then((resp) => {
      this.loading = false
      resp.data
    })
  },
}
</script>

<style>
.card-item-image{
  margin-left: auto;
  margin-right: auto;
}
.add-to-cart{
  
}
</style>
