<template>
  <div>
    <v-toolbar>
      <v-app-bar app clipped-leftS flat>
        <v-toolbar-title>
          <h5>به مدرسه آنلاین خوش آمدید</h5>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
            <h3 style="color:green">1</h3>
          <v-icon>mdi-cart</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-app-bar>
    </v-toolbar>

    <v-navigation-drawer app flat right mini-variant permanent expand-on-hover>
      <v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/11.jpg"></v-img>
          </v-list-item-avatar>

          <v-list-item-title style="margin-right:20px">John Doe</v-list-item-title>
        </v-list-item>
        <v-list-item
          v-for="item in navbarlist"
          :key="item.route"
          :to="item.route"
        >
          <v-list-item-icon>
            <v-icon >{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content class="text-margin">{{ item.text }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    navbarlist: [
      { icon: 'mdi-home', text: 'خانه', route: '/' },
      { icon: 'fa-graduation-cap', text: 'دانش آموزان', route: '/students' },
      { icon: 'fa-users', text: 'کاربران', route: '/users' },
      { icon: 'mdi-shopping', text: 'محصولات', route: '/products' },
      { icon: 'mdi-truck', text: 'وسایل نقلیه', route: '/vehicles' },
    ],
  }),
}
</script>

<style>
.text-margin{
  margin-right:20px;
}
</style>
