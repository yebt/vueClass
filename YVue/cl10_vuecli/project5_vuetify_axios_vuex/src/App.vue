<template>
  <!-- this is the same -->
  <v-app>
    <v-main>
      <v-content>
        <v-container>
          <router-view/>
        </v-container>
      </v-content>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
