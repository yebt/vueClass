<template>
  <div class="mt-5">
    <h1>Inputs</h1>
    <b-container fluid>
      <form>
        <b-row class="my-1" v-for="type in types" :key="type">
          <b-col sm="3">
            <label :for="`type-${type}`"
              >Type <code>{{ type }}</code
              >:</label
            >
          </b-col>
          <b-col sm="9">
            <b-form-input :id="`type-${type}`" :type="type"></b-form-input>
          </b-col>
        </b-row>
      </form>
    </b-container>
    <b-container class="mt-4" fluid>
      <h1>Forms</h1>
      <form class="my-3">
        <b-row>
          <b-col md="3">
            <b-form-input
              type="text"
              v-model="texto"
              :state="comprobe3C"
            ></b-form-input>
            <small>Minimo 3 caracteres</small>
            <div>{{ texto }}</div>
          </b-col>

          <b-col md="3">
            <b-form-select
              v-model="selectedItemS"
              :options="animals"
            ></b-form-select>
            <p>Selected: {{ selectedItemS }}</p>
          </b-col>

          <b-col md="3">
            <b-form-radio-group
              v-model="selectedItemR"
              :options="animalsR"
            ></b-form-radio-group>
            <p>Option: {{ selectedItemR }}</p>
          </b-col>

          <b-col md="3">
            <b-form-checkbox-group
              v-model="selectedItemC"
              :options="animalsR"
            ></b-form-checkbox-group>
            <p>Option: {{ selectedItemC }}</p>
          </b-col>
        </b-row>
      </form>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "FormView",
  data() {
    return {
      types: [
        "text",
        "number",
        "email",
        "password",
        "search",
        "url",
        "tel",
        "date",
        "time",
        "range",
        "color",
      ],
      texto: "",
      selectedItemS: null,
      selectedItemR: null,
      selectedItemC: [],
      animals: [
        { value: null, text: "Seleccione un animal" },
        { value: "dog", text: "Dog 🐶" },
        { value: "cat", text: "Cat 🐱" },
        { value: "fox", text: "Fox 🦊" },
        { value: "rabbit", text: "Rabbit 🐰" },
        { value: "bear", text: "Bear 🐻" },
      ],
      animalsR: [
        { value: "dog", text: "Dog 🐶" },
        { value: "cat", text: "Cat 🐱" },
        { value: "fox", text: "Fox 🦊" },
        { value: "rabbit", text: "Rabbit 🐰" },
        { value: "bear", text: "Bear 🐻" },
      ],
    };
  },
  computed: {
    comprobe3C() {
      return this.texto.length > 2;
    },
  },
};
</script>