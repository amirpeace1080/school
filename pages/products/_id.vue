<template>
  <div class="mb-5">
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
    <v-container class="mt-5">
      <v-card width="100%" height="auto">
        <v-row>
          <v-flex xs12 lg6 width="50%">
            <v-container>
              <v-img
              :src="this.$store.state.productItem.image"
              alt="این محصول فاقد عکس است"
              width="90%"
              height="400px"
              class="mr-4"
            ></v-img>
            </v-container>
          </v-flex>

          <v-flex xs12 lg6 width="100%" height="400px">
            <v-container class="mt-3">
              <h1 class="mt-4"> {{ this.$store.state.productItem.name }} </h1>
              <h3 class=" mr-4 mt-5"> ${{ this.$store.state.productItem.price }} </h3>
              <br>
              <p class="title">Color : {{ this.$store.state.productItem.color}}</p>
              <p class="title">Department : {{ this.$store.state.productItem.department}} </p>
              <br><br>
               <v-container class="">
                  <v-row>
                    <v-col cols="6">
                          <v-btn class="rounded-xl" width="100%" height="40px" color="warning">
                            <h4> نشان کردن </h4>
                          </v-btn>
                      
                    </v-col>
                    <v-col cols="6">
                          <v-btn class="rounded-xl" width="100%" height="40px" color="success">
                            <h4> اضافه کردن به سبد </h4>
                          </v-btn>
                      
                    </v-col>
                  </v-row>
                </v-container>
            </v-container>
          </v-flex>
        </v-row>
      </v-card>
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
      .dispatch('getProductItems', { id: this.$route.params.id })
      .then((resp) => {
        this.loading = false
        resp.data
      })
  },
}
</script>

<style></style>
