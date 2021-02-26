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

    <h2 class="d-flex justify-center mb-5">
      لیست دانش آموزان سال تحصیلی 1400 1401
    </h2>

    <v-card id="app" class="mt-5">
      <v-container class="mt-5">
        <v-layout>
          <v-row>
            <v-flex
              xs12
              sm6
              lg4
              v-for="(student, index) in this.$store.state.students"
              :key="index"
            >
              <v-container>
                <v-card hover elevation="8">
                  <v-card-media>
                    <img :src="student.image" height="150px" width="100%" />
                  </v-card-media>

                  <v-card-title class="d-flex justify-center">
                    <h2>{{ student.name }}</h2>
                  </v-card-title>

                  <v-card-text>
                    نام خانوادگی: {{ student.lastName }}<br />
                    جنسیت : {{ student.gender }} <br />
                  </v-card-text>

                  <v-card-actions>
                    <!-- <v-btn icon><v-icon>mdi-bookmark</v-icon></v-btn> -->
                    <v-spacer></v-spacer>
                    <v-btn color="success" class="ml-1">ارسال پیام</v-btn>
                    <nuxt-link :to="{ path: `students/${student.id}` }">
                      <v-btn flat color="primary">جزئیات</v-btn>
                    </nuxt-link>
                  </v-card-actions>
                </v-card>
              </v-container>
            </v-flex>
          </v-row>
        </v-layout>
      </v-container>
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
    this.$store.dispatch('getStudent').then((resp) => {
      this.loading = false
      resp.data
    })
  },
}
</script>

<style>
.check input[type='checkbox'],
.check label,
.check label::before,
.check label::after,
.check {
  appearance: none;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  border-radius: 50%;
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance: none;
}
.check label {
  width: 5.2rem;
  height: 5rem;
  overflow: hidden;
}

.check input[type='checkbox']:after {
  content: '';
  font-size: 2em;
  text-align: center;
  line-height: 70px;
  color: #555555;
  position: absolute;
  margin: auto auto;
  left: 0;
  right: 0;
  bottom: 80px;
  top: 0;
  display: block;
  height: 70px;
  width: 70px;
  border-radius: 50%;
  background-image: none;
  background-repeat: no-repeat;
  background-position: center;
  background: #d7d7d7;
  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  -ms-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}

.check input[type='checkbox']:before {
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  bottom: 0;
  top: -80px;
  content: '';
  display: block;
  height: 80px;
  width: 80px;
  border: 2px solid #d7d7d7;
  border-radius: 50%;
  -webkit-transition: all 0.1s ease-in;
  -moz-transition: all 0.1s ease-in;
  -ms-transition: all 0.1s ease-in;
  -o-transition: all 0.1s ease-in;
  transition: all 0.1s ease-in;
}

.check input[type='checkbox']:hover:before {
  height: 60px;
  width: 60px;
}

.check input[type='checkbox']:checked:before {
  height: 55%;
  width: 100%;
  background: #47cf73;
  border: none;
  border-radius: 0;
}

.check input[type='checkbox']:focus {
  outline: none;
}

.check input[type='checkbox'].a:after {
  content: 'i';
}
.check input[type='checkbox']:checked:after {
  content: '✓';
}

.label__checkbox {
  display: none;
}
.label__check {
  font-size: calc(2rem + 1vw);
  display: inline-block;
  border-radius: 50%;
  border: 5px solid rgba(0, 0, 0, 0.1);
  background: white;
  width: 2em;
  height: 2em;
  cursor: pointer;
  display: inline-block;
  align-items: center;
  justify-content: center;
  transition: border 0.3s ease;
}
.label__check i.icon {
  opacity: 0.2;
  font-size: 3rem;
  color: transparent;
  transition: opacity 0.3s 0.1s ease;
  -webkit-text-stroke: 3px rgba(0, 0, 0, 0.5);
}
.label__check:hover {
  border: 5px solid rgba(0, 0, 0, 0.2);
}
.label__checkbox:checked + .label__text .label__check {
  -webkit-animation: check 0.5s cubic-bezier(0.895, 0.03, 0.685, 0.22) forwards;
  animation: check 0.5s cubic-bezier(0.895, 0.03, 0.685, 0.22) forwards;
}
.label__checkbox:checked + .label__text .label__check .icon {
  opacity: 1;
  position: relative;
  margin: auto;
  top: 5px;
  font-size: 3rem;
  -webkit-transform: scale(0);
  transform: scale(0);
  color: white;
  -webkit-text-stroke: 0;
  -webkit-animation: icon 0.3s cubic-bezier(1, 0.008, 0.565, 1.65) 0.1s 1
    forwards;
  animation: icon 0.3s cubic-bezier(1, 0.008, 0.565, 1.65) 0.1s 1 forwards;
}
.center {
  position: relative;
  margin: auto;
  width: 80px;
  height: 80px;
  top: 50px;
  left: 40px;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
@-webkit-keyframes icon {
  from {
    opacity: 0;
    -webkit-transform: scale(0.3);
    transform: scale(0.3);
  }
  to {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
@keyframes icon {
  from {
    opacity: 0;
    -webkit-transform: scale(0.3);
    transform: scale(0.3);
  }
  to {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
@-webkit-keyframes check {
  0% {
    width: 1.5em;
    height: 1.5em;
    border-width: 5px;
  }
  10% {
    width: 1.5em;
    height: 1.5em;
    opacity: 0.1;
    background: rgba(0, 0, 0, 0.2);
    border-width: 15px;
  }
  12% {
    width: 1.5em;
    height: 1.5em;
    opacity: 0.4;
    background: rgba(0, 0, 0, 0.1);
    border-width: 0;
  }
  50% {
    width: 2em;
    height: 2em;
    background: #00d478;
    border: 0;
    opacity: 0.6;
  }
  100% {
    width: 2em;
    height: 2em;
    background: #00d478;
    border: 0;
    opacity: 1;
  }
}
@keyframes check {
  0% {
    width: 1.5em;
    height: 1.5em;
    border-width: 5px;
  }
  10% {
    width: 1.5em;
    height: 1.5em;
    opacity: 0.1;
    background: rgba(0, 0, 0, 0.2);
    border-width: 15px;
  }
  12% {
    width: 1.5em;
    height: 1.5em;
    opacity: 0.4;
    background: rgba(0, 0, 0, 0.1);
    border-width: 0;
  }
  50% {
    width: 2em;
    height: 2em;
    background: #00d478;
    border: 0;
    opacity: 0.6;
  }
  100% {
    width: 2em;
    height: 2em;
    background: #00d478;
    border: 0;
    opacity: 1;
  }
}
</style>
