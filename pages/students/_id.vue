<template>
  <div>
    <!-- start loading  -->
    <div class="loader" v-if="loading">Loading...</div>
    <!-- end loading -->

    <h2 class="d-flex justify-center mb-5">
      لیست دانش آموزان سال تحصیلی 1400 1401
    </h2>

    <v-card :loading="loading" class="mx-auto my-12" max-width="90%">
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <div style="height: 250px">
        <v-avatar
          class="d-flex"
          height="120"
          width="12%"
          style="margin: auto; top: 40%"
        >
          <v-img
            src="data:image/jpeg;base64,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"
          ></v-img>
        </v-avatar>
      </div>

      <v-card-title class="d-flex justify-center">
        {{ this.$store.state.studentItem.name }}
        {{ this.$store.state.studentItem.lastName }}
      </v-card-title>

      <v-divider class="mx-4"></v-divider>

      <!-- <v-card-title>Tonight's availability</v-card-title> -->
      <v-container class="mt-5">
        <v-row class="mt-5">
          <v-col cols="6" style="text-align: left">
            <p>آیدی :</p>
            <p>نام :‌</p>
            <p>نام خانوادگی :‌</p>
            <p>جنسیت :‌</p>
            <p>تلفن :‌</p>
            <p>نقش :‌</p>
            <p>دوره :‌</p>
          </v-col>

          <v-col cols="6">
            <p class="id-overflow">{{ this.$store.state.studentItem.id }}</p>
            <p>{{ this.$store.state.studentItem.name }}</p>
            <p>{{ this.$store.state.studentItem.lastName }}</p>
            <p>{{ this.$store.state.studentItem.gender }}</p>
            <p>{{ this.$store.state.studentItem.phone }}</p>
            <p>{{ this.$store.state.studentItem.rol }}</p>
            <p>{{ this.$store.state.studentItem.course }}</p>
          </v-col>
        </v-row>
      </v-container>

      <v-card-actions dir="ltr" class="mt-5">
        <v-btn @click="print">
          <v-icon color="blue">mdi-printer</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
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
      .dispatch('getStudentItem', { id: this.$route.params.id })
      .then((resp) => {
        this.loading = false
        // resp.data
      })
  },
  methods: {
    print(){
      this.$swal.fire({
  title: 'صفحه در حال چاپ است',
  showClass: {
    popup: 'animate__animated animate__fadeInDown'
  },
  hideClass: {
    popup: 'animate__animated animate__fadeOutUp'
  }
})
    }
  },
}
</script>

<style>
.id-overflow{
  height:10%;
  overflow: hidden;
}
</style>
