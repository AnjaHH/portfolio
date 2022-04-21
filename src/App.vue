<template>
  <div id="toplevel-wrapper" class="container-fluid d-flex min-vh-100 flex-column">
    
    <router-view/>
    <FooterComponent v-show="$route.name!=='home'" class="row mt-auto pa-0 gx-0" /> <!-- fixed-bottom (class) -->
  </div>  
</template>

<script>

import FooterComponent from '@/components/FooterComponent.vue'

export default {
  components: {
    FooterComponent,
    
    
  }
}
</script>


<style>

::-webkit-scrollbar {
    display: none;
} 
.container-fluid {
  padding: 0 !important
}
#app {
  font-family: didot;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333D29;
  background-color: #E6E3D9;
  margin: 0%;
  padding: 0%;
 
}

#toplevel-wrapper {
  padding-left: 0%;
  padding-right: 0%;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
