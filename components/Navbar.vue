<template>
  <div>
    <v-toolbar>
      <v-app-bar app clipped-leftS flat>
        <v-toolbar-title>
          <h4>به مدرسه آنلاین خوش آمدید</h4>
        </v-toolbar-title>
        <v-spacer></v-spacer>
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

          <v-list-item-title>John Doe</v-list-item-title>
        </v-list-item>
        <v-list-item
          v-for="item in navbarlist"
          :key="item.route"
          :to="item.route"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>{{ item.text }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    navbarlist: [
      { icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/' },
      { icon: 'mdi-upload', text: 'Upload', route: '/upload' },
    ],
  }),
}
</script>

<style></style>
