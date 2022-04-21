<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-container>
        <!-- Boton que aparece en el estado de responsive -->
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <!-- logo o icono -->
        <b-navbar-brand >VueLearn</b-navbar-brand>
        <!-- Contenido a colapsar -->
        <b-collapse id="nav-collapse" is-nav> 
          <b-navbar-nav>
            <b-nav-item exact-active-class="active" :to="{name: 'home'}">Home</b-nav-item>
            <b-nav-item exact-active-class="active" :to="{name: 'about'}">About</b-nav-item>
            <b-nav-item exact-active-class="active" :to="{name: 'grid'}">Grid</b-nav-item>
            <b-nav-item exact-active-class="active" :to="{name: 'cards'}">Cards</b-nav-item>
            <b-nav-item exact-active-class="active" :to="{name: 'forms'}">Forms</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
        <b-button>sad</b-button>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style>
/* 
nav a.router-link-exact-active {
  color: #42b983 !important;
} 
 */
</style>