<template>
  <div>
      <h2>Querys</h2>
      <router-link :to="{query: {section: 1}}">1</router-link> <span> </span>
      <router-link :to="{query: {section: 2}}">2</router-link> <span> </span>
      <router-link :to="{query: {section: 3}}">3</router-link> <span> </span>
      <router-link :to="{query: {section: 4}}">4</router-link> <span> </span>
  </div>
</template>

<script>
export default {
  name: "QueryView",
  data () {
    return{

    }
  },
  watch: {
    // estar pendiente de la query
    // estar opendiente cada vez qeu se cargue
    "$route.query.section":{
      // cargar inmediatamente
      immediate: true,
      //nuevo y viejo valor
      handler(newVal, oldVal){
        console.log('Section change of', oldVal,'to the new val:', newVal);
      }
    }
  }
};
</script>