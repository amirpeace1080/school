<template>
  <div class="mb-4">
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
    <v-container>
      <div class="main-item">
        <v-form>
          <v-container class="">
            <v-row>
              <v-col cols="12" md="6">
                <v-container>
                  <v-text-field
                    v-model="this.$store.state.clientItem.name"
                    label="نام"
                    required
                    reverse
                  ></v-text-field>
                </v-container>
              </v-col>

              <v-col cols="12" md="6">
                <v-container>
                  <v-text-field
                    v-model="this.$store.state.clientItem.username"
                    label="نام کاربری"
                    required
                    reverse
                  ></v-text-field>
                </v-container>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-container>
                  <v-text-field
                    v-model="this.$store.state.clientItem.email"
                    label="ایمیل"
                    required
                    reverse
                  ></v-text-field>
                </v-container>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="6">
                <v-container>
                  <v-text-field
                    v-model="this.$store.state.clientItem.address&&this.$store.state.clientItem.address.street"
                    label="خیابان"
                    required
                    reverse
                  ></v-text-field>
                </v-container>
              </v-col>

              <v-col cols="12" md="6">
                <v-container>
                  <v-text-field
                    v-model="this.$store.state.clientItem.address&&this.$store.state.clientItem.address.suite"
                    label="مجموعه"
                    required
                    reverse
                  ></v-text-field>
                </v-container>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-container>
                  <v-text-field
                    v-model="this.$store.state.clientItem.address&&this.$store.state.clientItem.address.city"
                    label="شهر"
                    required
                    reverse
                  ></v-text-field>
                </v-container>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="6">
                <v-container>
                  <v-text-field
                    v-model="this.$store.state.clientItem.address&&this.$store.state.clientItem.address.zipcode"
                    label="کد پستی"
                    required
                    reverse
                  ></v-text-field>
                </v-container>
              </v-col>

              <v-col cols="12" md="6">
                <v-container>
                  <v-text-field
                    v-model="this.$store.state.clientItem.phone"
                    label="تلفن"
                    required
                    reverse
                  ></v-text-field>
                </v-container>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-container>
                  <v-text-field
                    v-model="this.$store.state.clientItem.website"
                    label="وبسایت"
                    required
                    reverse
                  ></v-text-field>
                </v-container>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </div>
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
      .dispatch('getClientItem', { id: this.$route.params.id })
      .then((resp) => {
        this.loading = false
        resp.data
      })
  },
}
</script>

<style lang="scss">
.main-item {
  width: 80%;
  height: auto;
  margin: auto;
  background-color: white;
}
</style>
