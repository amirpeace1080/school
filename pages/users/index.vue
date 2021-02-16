<template>
  <div>
    <!-- start loading  -->
    <div class="loader" v-if="loading">Loading...</div>
    <!-- end loading -->

    <!-- start top content -->
    <h2>لیست کاربران</h2>
     <v-container class="mt-4">
        <v-row>
          <v-flex xs12 sm6 lg6>
            <span class="subtitle-2" style="color:#757575">۲۳۳۰ کاربر ثبت شده است</span>
          </v-flex>
          <v-flex sm6 lg6 class="hidden-sm-and-down form-search">
            <form width="40%">
              <v-text-field type="text" placeholder="جستجوی کاربر" 
              label="جستجو" reverse append-icon="fa-search" outlined color></v-text-field>
              
            </form>
          </v-flex>
        </v-row>
      </v-container>
    <!-- end top content -->

    <!-- start main items -->
    <v-container class="mt-5">
      <!-- <v-layout> -->
      <v-row>
        <v-flex class="mt-4"
          lg4
          sm6
          xs12
          v-for="(user, index) in this.$store.state.users"
          :key="index"
        >
          <v-container>
            <v-hover
        v-slot="{ hover }"
        open-delay="200"
      >
            <v-card width="100%" height="180px" :elevation="hover ? 14 : 2" :class="{ 'on-hover': hover }">
              <v-card-title primary-title>
                <v-container class="">
                  <v-row>
                    <v-flex xs3 sm3 lg3>
                      <v-avatar color="primary" size="56">
                        <!-- <v-img src="img.avatar"></v-img> -->
                      </v-avatar>
                    </v-flex>
                    <v-flex xs9 sm9 lg9>
                      <h5>{{ user.name }} {{ user.lastName }}</h5>
                      <!-- <br> -->
                      <span class="caption" style="color: #757575">گروه مدیریت مالی</span>
                      <br>
                       <v-icon color="success" dense>mdi-marker-check</v-icon>
                       <span class="body-2 success--text text-xs-overline">دارای ۸ دسترسی</span>
                    </v-flex>
                  </v-row>
                  <v-row>
                    <nuxt-link to="">
                      <span class="fa fa-cog" style="color: #757575"></span>
                      <span class="subtitle-2" style="color: #757575"> تنظیمات کاربر </span>
                    </nuxt-link>
                    <button @click="delete_user" class="mr-5">
                      <v-icon style="color:#DD2C00" dense>mdi-delete</v-icon>
                      <span class="subtitle-2" style="color:#DD2C00">حذف کاربر</span>
                    </button>
                  </v-row>
                </v-container>
              </v-card-title>
            </v-card>
            </v-hover>
          </v-container>
        </v-flex>
      </v-row>
      <!-- </v-layout> -->
    </v-container>
    <!-- end main items -->
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
    this.$store.dispatch('getUsers').then((resp) => {
      this.loading = false
      resp.data
    })
  },
  methods: {
    delete_user(){
      this.$swal.fire({
  title: 'آیا حذف شود؟',
  text: "در صورت حذف دیگر قابل بازیافت نیست",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  cancelButtonText: 'نه فعلا',
  confirmButtonText: 'بله، حذف شود!'
}).then((result) => {
  if (result.isConfirmed) {
    this.$swal.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    )
  }
})
    }
  },
}
</script>

<style>
.form-search{
  position: absolute;
  left: 100px;
}
</style>
