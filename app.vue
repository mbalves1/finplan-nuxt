<template>
  <v-app style="background: #B5C2CA;">
    <v-row style="max-width: 1200px; width: 100%; margin: auto; background: #B5C2CA;">
      <v-row class="my-10">
        <v-card
          class="mx-5 rounded-xl"
          width="300"
          color="#F0F3F4"
          elevation="0"
        >
          <v-card-item class="" style="width: 100%;">
            <v-card-title class="title d-flex justify-center px-4 py-4">FinPlan <v-icon>mdi-wallet</v-icon></v-card-title>

            <v-divider></v-divider>

            <v-list
              density="compact"
              nav
              bg-color="#F0F3F4"
              active-color="black"
              base-color="black"
              >
              
              <v-list-item
              v-for="(item, i) in items"
                :key="i"
                :value="item"
                class="rounded-xl px-5"
                color="black"
                :title="item.title"
              >
              <template v-slot:prepend>
                <v-icon :icon="item.icon"></v-icon>
              </template>
              <NuxtLink :to="item.link" class="list-text" style="text-decoration: none; color: black">
                <v-list-item-title >
                  {{ item.text }}
                </v-list-item-title>
              </NuxtLink>
            </v-list-item>

            </v-list>
          </v-card-item>
        </v-card>
        <v-main class="d-flex">
          <NuxtPage />
        </v-main>
      </v-row>
    </v-row>
  </v-app>
</template>
<script>

export default {
  data: () => ({
    items: [
      { text: 'Home', icon: 'mdi-view-dashboard', link: '/home' },
      { text: 'Add', icon: 'mdi-credit-card-plus', link: '/page1' },
      { text: 'Dashboard', icon: 'mdi-finance', link: '/page2' },
    ],
  }),
}
</script>
<style>
.title {
  font-family: 'Montserrat', sans-serif;
}

.list-text {
  text-decoration: none !important;
}

</style>

