<template>
  <v-container class=" mt-6">
    <v-row class="wrapper rounded-xl">
      <v-col class="pa-5">
        <v-sheet class="d-flex" style="">
          <v-sheet class="me-auto">
            <h2>Last releases</h2>
            <p>117 proceed</p>
          </v-sheet>
          <v-sheet class="mx-2">
            <h3>In</h3>
            <p>30</p>
          </v-sheet>
          <v-sheet class="mx-2">
            <h3>Out</h3>
            <p>30</p>
          </v-sheet>
        </v-sheet>

        <v-divider class="my-5"></v-divider>

        <v-sheet class="wrapper--list">
          <ListRelease></ListRelease>

          <TableRelease></TableRelease>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row class="mt-6">
      <v-col class="wrapper rounded-xl mt-6 mr-6">
        ola
      </v-col>
      <v-col class="wrapper rounded-xl mt-6">
        ola
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    textfield: null,
    model: true
  }),
}
</script>
<style scoped lang="scss">
.wrapper {
  background-color: white;
  &--list {
    height: 350px;
    overflow-y: scroll;
  }
}
</style>