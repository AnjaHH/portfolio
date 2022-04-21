<template>
  <div >
    <div class="logo">
      <a href="/">
      <img id="biglogo" src="../../images/logo.png" alt="">
      </a>
    </div>
    <h1>Projekter</h1>
   <ProjectComponent />
    
  </div>
</template>

<script>

import ProjectComponent from '../components/ProjectComponent.vue'



export default {
  components:{
 ProjectComponent
   
    
  }
}
</script>

<style lang="scss" scoped >

.logo {
  display:flex;
  justify-content: flex-end;
  align-content: right;
}
#biglogo {
  width: 100px;
  margin-right: 30px;
  margin-top: 30px;
  margin-bottom: 30px;
}

h1 {
  margin-bottom: 50px;
}
  
</style>
