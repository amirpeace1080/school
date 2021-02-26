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
    <h2>لیست کاربران</h2>
    <v-container class="mt-4 mb-5">
      <v-row>
        <v-flex xs12 sm6 lg6>
          <span class="subtitle-2" style="color: #757575"
            >۲۳۳۰ کاربر ثبت شده است</span
          >
        </v-flex>
      </v-row>
    </v-container>
    <!-- end top content -->

    <!-- start main -->
    <div class="mt-5 mb-5">
      <!-- start form  -->
      <form>
        <v-card height="auto" class="" elevation="11" max-width="100%">
          <v-container class="">
            <v-row class="mt-2">
              <v-flex xs3 sm4 lg4></v-flex>
              <v-flex xs6 sm-4 lg4>
                <v-avatar size="115" style="margin: auto; right: 30%">
                  <img
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                    alt="John"
                  />
                </v-avatar>
              </v-flex>
              <v-flex xs3 sm4 lg4></v-flex>
            </v-row>
            <!-- start row two  -->
            <v-row class="mt-3">
              <v-flex class="hidden-sm-and-down" sm2 lg3></v-flex>
              <v-flex xs12 sm8 lg6>
                <v-card class="mt-5" width="100%" elevation="14">
                  <v-card-text>
                    <label class="title"> نام کاربر : </label>
                    <v-text-field
                      class="mt-2"
                      v-model="this.$store.state.userItem.name"
                      reverse
                    ></v-text-field>
                  </v-card-text>

                    <v-card-text>
                    <label class="title"> نام خانوادگی : </label>
                    <v-text-field
                      class="mt-2"
                      v-model="this.$store.state.userItem.lastName"
                      reverse
                    ></v-text-field>
                  </v-card-text>

                  <v-card-text>
                    <label class="title"> جنسیت : </label>
                    <v-text-field
                      class="mt-2"
                      v-model="this.$store.state.userItem.gender"
                      reverse
                    ></v-text-field>
                  </v-card-text>

                  <v-card-text>
                    <label class="title"> شماره تماس : </label>
                    <v-text-field
                      class="mt-2"
                      v-model="this.$store.state.userItem.phone"
                      reverse
                    ></v-text-field>
                  </v-card-text>

                  <v-card-text>
                    <label class="title">  نام کاربری : </label>
                    <v-text-field
                      class="mt-2"
                      v-model="this.$store.state.userItem.userName"
                      reverse
                    ></v-text-field>
                  </v-card-text>

                  <v-card-text>
                    <label class="title">  ایمیل : </label>
                    <v-text-field
                      class="mt-2"
                      v-model="this.$store.state.userItem.email"
                      reverse
                    ></v-text-field>
                  </v-card-text>

                  <v-card-text>
                    <label class="title">  رمز کاربر : </label>
                    <v-text-field
                      class="mt-2"
                      v-model="this.$store.state.userItem.pass"
                      reverse
                    ></v-text-field>
                  </v-card-text>

                </v-card>
              </v-flex>
              <v-flex class="hidden-sm-and-down" xs0 sm2 lg3></v-flex>
            </v-row>
          </v-container>
        </v-card>
      </form>
      <!-- end form  -->
    </div>
    <!-- end main -->
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
      .dispatch('getUserItem', { id: this.$route.params.id })
      .then((resp) => {
        this.loading = false
        resp.data
      })
  },
}
</script>

<style></style>
