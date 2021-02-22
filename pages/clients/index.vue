<template>
  <div>
    <!-- start loading  -->
    <div class="loader" v-if="loading">Loading...</div>
    <!-- end loading -->

    <!-- start top content -->
    <h2>مشتری ها</h2>
    <v-container class="mt-4 mb-5">
      <v-row>
        <v-flex xs12 sm6 lg6>
          <span class="subtitle-2" style="color: #757575"
            >۲۳۳۰ مشتری ثبت شده است</span
          >
        </v-flex>
      </v-row>
    </v-container>
    <!-- end top content-->

    <!-- start main page  -->
    <v-container class="">
      <v-row>
        <v-flex
          xs12
          sm6
          lg3
          v-for="(client, index) in this.$store.state.clients"
          :key="index"
        >
          <v-container class="">
            <v-container>
              <v-card
                class="rounded-xl card-main"
                elevation=""
                color="#565656"
                max-width="100%"
                height="350px"
              >
                <v-container>
                  <div class="mr-2">
                    <span
                      style="font-weight: 700px; font-size: 22px; color: #fff"
                      >نام :</span
                    >
                    <span> {{ client.name }} </span>
                  </div>

                  <div class="mr-2 mt-1">
                    <span
                      style="font-weight: 700px; font-size: 16px; color: #fff"
                    >
                      {{ client.email }}
                    </span>
                  </div>

                  <div class="mr-2 mt-4">
                    <span
                      class="ml-2"
                      style="
                        font-weight: 500px;
                        font-size: 12px;
                        color: #ff7a18;
                      "
                    >
                      orange
                    </span>
                    <span
                      class="ml-2"
                      style="
                        font-weight: 500px;
                        font-size: 12px;
                        color: #ff7a18;
                      "
                    >
                      apple
                    </span>
                    <span
                      class="ml-2"
                      style="
                        font-weight: 500px;
                        font-size: 12px;
                        color: #ff7a18;
                      "
                    >
                      bannanna
                    </span>
                  </div>

                  <div
                    style="position: absolute; bottom: 20px; margin-right: 10px"
                  >
                    <v-avatar>
                      <img
                        src="https://cdn.vuetifyjs.com/images/john.jpg"
                        alt="John"
                        size="80"
                      />
                    </v-avatar>
                    <span class="mr-2">
                      <nuxt-link :to="{path: `/clients/${client.id}`}">
                        <span
                        class="name-bottom"
                      >
                        {{ client.name }}
                      </span>
                      </nuxt-link>
                    </span>
                  </div>
                </v-container>
              </v-card>
            </v-container>
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
    this.$store.dispatch('getClients').then((resp) => {
      this.loading = false
      resp.data
    })
  },
}
</script>

<style>
.name-bottom{
font-weight: 600px;
font-size: 18px;
color: #fff
}
.name-bottom:hover{
  color: blue;
}

</style>
