<template>
  <div>
    <h1>Photo gallery</h1>
    <router-link
      v-for="(item, index) of photoNames"
      :key="index"
      :to="{ name: 'photos', params: { id: item } }"
    >
    
      <button>Photo {{ item }}</button>
    </router-link>
    <Photo />
    <button @click="previusPage">Previous </button>
    <button @click="home">Home</button>
    <button @click="nextPage"> Next </button>
  </div>
</template>

<script>
// call component
import Photo from "@/components/Photo.vue";

// export the component to use this
export default {
  name: "Photosview",
  components: {
    Photo,
  },
  data() {
    return {
      photoNames: [1, 2, 3, 4],
    };
  },
  methods: {
      home(){
          this.$router.push('/');
      },
      previusPage(){
          this.$router.go(-1);
      },
      nextPage(){
          this.$router.go(1);
      }
  }
};
</script>