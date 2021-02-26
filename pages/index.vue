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

    <div id="blog-section">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-4">
            <div class="blog-section-intro">
              <h2>من محمدشریفی هستم</h2>
              <p>
                یک برنامه نویس فرانت اند که علاقه زیادی به کد زدن و چالش هاش
                دارم
              </p>
            </div>
          </div>

          <div class="col-xs-12 col-sm-6 col-md-4">
            <a
              class="blog-item first"
              href="http://practice.gigfa.com/"
              title="Suspendisse potenti"
            >
              <div
                class="blog-item-img"
                style="
                  background-image: url(https://static.pexels.com/photos/60324/pexels-photo-60324-medium.jpeg);
                "
              ></div>
              <div class="blog-item-content">
                <span class="blog-item-label">وبسایت</span>
                <span class="blog-item-date">
                  <span class="blog-item-date-day">30</span>
                  <span class="blog-item-date-month">Sept</span>
                </span>
                <h3>مای شاپ</h3>
                <p>
                  ای شاپ یه تمرین خوب برام بود، بیشتر سعی کردم روی api تمرین کنم
                  و بخشی ازش روی توی vuex هندل کردم ، و برای اولین بار بود که از
                  bulma توی پروژه م استفاده کردم
                </p>
              </div>
            </a>
          </div>

          <div class="col-xs-12 col-sm-6 col-md-4">
            <a
              class="blog-item second"
              href="http://rango.gigfa.com/?i=1"
              title="Suspendisse potenti"
            >
              <div
                class="blog-item-img"
                style="
                  background-image: url(https://static.pexels.com/photos/185764/pexels-photo-185764-medium.jpeg);
                "
              ></div>
              <div class="blog-item-content">
                <span class="blog-item-label">جدید</span>
                <span class="blog-item-date">
                  <span class="blog-item-date-day">18</span>
                  <span class="blog-item-date-month">Aug</span>
                </span>
                <h3>همه چی آموز</h3>
                <p>
                  این پروژه با js.nuxt هست با استفاده از vuetify و bootstrap
                </p>
              </div>
            </a>
          </div>

          <div class="col-xs-12 col-sm-6 col-md-4">
            <a
              class="blog-item third"
              href="http://learnoverflow.gigfa.com/"
              title="Suspendisse potenti"
            >
              <div
                class="blog-item-img"
                style="
                  background-image: url(https://static.pexels.com/photos/30587/pexels-photo-30587-medium.jpg);
                "
              ></div>
              <div class="blog-item-content">
                <span class="blog-item-label">قدیمی</span>
                <span class="blog-item-date">
                  <span class="blog-item-date-day">09</span>
                  <span class="blog-item-date-month">Aug</span>
                </span>
                <h3>LEARN OverFlow</h3>
                <p>
                  پروژه با استفاده از nuxtjs ساخته شده ،استفاده از vuetify و
                  vuex
                </p>
              </div>
            </a>
          </div>

          <div class="col-xs-12 col-sm-6 col-md-4">
            <a
              class="blog-item fourth"
              href="http://limusic.gigfa.com/"
              title="Suspendisse potenti"
            >
              <div
                class="blog-item-img"
                style="
                  background-image: url(https://static.pexels.com/photos/116191/pexels-photo-116191-medium.jpeg);
                "
              ></div>
              <div class="blog-item-content">
                <span class="blog-item-label">جدید</span>
                <span class="blog-item-date">
                  <span class="blog-item-date-day">7</span>
                  <span class="blog-item-date-month">Jul</span>
                </span>
                <h3>limusic</h3>
                <p>با استفاده از js.nuxt و api با postman و استفاده از vuex</p>
              </div>
            </a>
          </div>

          <div class="col-xs-12 col-sm-6 col-md-4">
            <div class="buttonContainer">
              <a
                class="button"
                href="http://mohammad-sharifi.ir/"
                title="Show more"
                ><span>رزومه کامل</span></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700);

h2 {
  color: #1c1c45;
  font-size: 20px;
  line-height: 1;
  font-weight: 300;
  text-transform: uppercase;
}
h3 {
  color: #e2002b;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.2;
  margin-top: 0;
  margin-bottom: 10px;
}

p {
  color: #76787a;
  font-size: 16px;
  font-weight: normal;
  line-height: 1.625;
}

a,
a:visited {
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

a.button {
  position: relative;
  z-index: 1;
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.625em;
  color: #1c1c45 !important;
  text-align: center;
  -moz-border-radius: 0;
  -webkit-border-radius: 0;
  border-radius: 0;
  border: 1px solid;
  border-color: #fff;
  text-decoration: none;
  text-transform: none;
  text-shadow: none;
  letter-spacing: 1px;
  padding: 10px 30px 10px;
  background-color: #fff;
  background: #fff; /* Old browsers */
  -webkit-appearance: none;
  -moz-appearance: none;

  vertical-align: middle;
  -webkit-backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
}

a.button:hover {
  color: #fff !important;
  background: #1c1c45;
  border-color: #1c1c45;
  text-decoration: none !important;
}

#blog-section {
  padding: 100px 0 200px;
  background-image: url(https://static.pexels.com/photos/3164/sea-black-and-white-water-ocean-large.jpg);
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;
  -webkit-background-size: cover;
}

#blog-section .container {
  width: 1255px;
}

@media only screen and (max-width: 1254px) {
  #blog-section .container {
    width: 100%;
  }
}

#blog-section .container .row > div {
  padding-right: 30px;
  padding-left: 30px;
}

.blog-section-intro {
}

.blog-section-intro h2 {
  font-size: 32px;
  line-height: 40px;
}

.blog-section-intro p {
  font-size: 18px;
}

.blog-item {
  position: relative;
  display: block;
  text-decoration: none;
  margin: 0 0 35px 0;
}

#blog-section .blog-item {
  padding-top: 200px;
}

.blog-item:hover {
  text-decoration: none !important;
}

#blog-section .button {
  position: relative;
  top: 160px;
}

@media only screen and (min-width: 992px) {
  .blog-item.second,
  .blog-item.fourth {
    top: 120px;
  }

  #blog-section .button {
    position: relative;
    top: 260px;
  }
}

.blog-item-img {
  position: relative;
  width: 100%;
  height: 230px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-box-shadow: 0 6px 24px 0 rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0 6px 24px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 6px 24px 0 rgba(0, 0, 0, 0.1);
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
.blog-item-img.smaller {
  height: 210px;
}
.blog-item-img.larger {
  height: 250px;
}

.blog-item-img.video {
}
.blog-item-img.video::before {
  content: '\f04b';
  position: absolute;
  left: 50%;
  top: 50%;
  display: inline-block;
  font-family: 'FontAwesome';
  color: #fff;
  font-size: 50px;
  line-height: 19px;
  -webkit-transform: translateY(-50%) translateX(-50%);
  -ms-transform: translateY(-50%) translateX(-50%);
  transform: translateY(-50%) translateX(-50%);
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.blog-item:hover .blog-item-img.video::before {
  color: #e2002b;
}

#blog-section .blog-item-img {
  position: absolute;
  left: 5px;
  top: 0;
  height: 240px;
}

#blog-section .blog-item.first .blog-item-img {
  left: -10px;
}

.blog-item-content {
  position: relative;
  padding: 35px 20px 30px 65px;
  background-color: #fff;
  -moz-box-shadow: 0 6px 24px 0 rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0 6px 24px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 6px 24px 0 rgba(0, 0, 0, 0.1);
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

#blog-section .blog-item-content {
  left: -5px;
}

#blog-section .blog-item.first .blog-item-content {
  left: 10px;
}

#blog-section .blog-item:hover .blog-item-img,
#blog-section .blog-item:hover .blog-item-content {
  left: 0;
}

.blog-item-label {
  position: absolute;
  left: 20px;
  top: -15px;
  display: inline-block;
  padding: 3px 10px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1px;
  color: #fff;
  text-transform: uppercase;
  background-color: #e2002b;
}

.blog-item-date {
  position: absolute;
  left: 20px;
  top: 35px;
  display: inline-block;
  color: #c8cace;
  text-align: center;
}
.blog-item-date-day {
  display: block;
  font-size: 28px;
  line-height: 28px;
}

.blog-item-date-month {
  display: block;
  font-size: 14px;
  font-weight: 700;
  line-height: 14px;
}

.blog-item h3 {
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.blog-item:hover h3 {
  color: #272c42;
}

.blog-item-content p {
  margin-bottom: 0;
}

.buttonContainer {
  position: relative;
  width: 100%;
  float: left;
  clear: both;
  text-align: center;
  margin-bottom: 35px;
}
</style>
