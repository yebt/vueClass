<template>
  <div>
    <h1>My Tasks</h1>
    <div>
      <ul>
        <li v-for="(item, index) of tasksModuleState" :key="index">
          {{ item }}
        </li>
      </ul>
    </div>
    <div>
      <span> {{contador}} </span>
      <br>
      <span> {{title}} </span>
    </div>
    <div>
      <h3>From count module</h3>
      <button @click="changeCounter(-2)">-</button>
      <span> {{counter}} </span>
      <button @click="changeCounter(2)">+</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "TaksView",
  computed: {
    // call from tasks module
    ...mapState("tasksModule", ["tasksModuleState", "contador"]),
    // call from index of vuex
    ...mapState(["title"]),

    // call  from counter module
    ...mapState('counterModule',['counter']),
  },
  methods: {
    // call from module
    ...mapMutations('counterModule',['changeCounter'])
  }
};
</script>