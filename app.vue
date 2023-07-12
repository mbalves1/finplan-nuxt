<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <v-card
        flat="flat"
        class="mx-auto"
        max-width="300"
      >
        <v-list density="compact">
          <v-list-subheader>REPORTS</v-list-subheader>

          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :value="item"
            color="primary"
          >
            <template v-slot:prepend>
              <v-icon :icon="item.icon"></v-icon>
            </template>

            <v-list-item-title>
              <router-link :to="{ path: `${item.link}` }" v-text="item.text"></router-link>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <NuxtPage />
    </v-main>
  </v-app>
</template>
<script setup>
  import { ref } from 'vue'

  const drawer = ref(null)
</script>

<script>
  export default {
    data: () => ({
      drawer: null,
      items: [
        { text: 'Real-Time', icon: 'mdi-clock', link: "/page2" },
        { text: 'Audience', icon: 'mdi-account', link: "/page1" },
        { text: 'Conversions', icon: 'mdi-flag', link: "/page1" },
      ],
    }),
  }
</script>
