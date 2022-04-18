<template>
  <div>
    <ul class="list-group">
      <li
        v-for="(item, index) of orderCF"
        :key="item.id"
        @click="increaseCF(index)"
        class="list-group-item d-flex justify-content-between align-items-start btn btn-outline-success"
      >
        <div class="ms-2 me-auto">
          <span>{{ item.emoji }}</span>
          <span class="px-4"> {{ item.id }}</span>
          <span class="fw-bold">{{ item.name }}</span>
        </div>
        <span class="badge bg-primary"> {{ item.cuantity }} </span>
      </li>
    </ul>

    <div class="d-grid">
      <button class="btn btn-danger" @click="resetCF">Reset <i class="bi bi-arrow-clockwise"></i></button>
    </div>
    
    
  </div>
</template>

<script>
// import the maps
import { mapState, mapMutations } from "vuex";

export default {
  name: "Listb",
  computed: {
    ...mapState(["fruits"]),
    orderCF(){
      return this.fruits.sort((a,b)=> b.cuantity - a.cuantity )
    }
  },
  methods: {
    ...mapMutations(["increaseCF", "resetCF"]),
  },
};
</script>