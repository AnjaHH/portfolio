<template>
 <div class="container-md"> <!-- switch to margin x over MD size(fluid and !fluid) -->
  <div class="row">


    <div v-for="project in projects" :key="project" id="box" class="col-12 col-sm-6 mb-5" >

      <div class="card" style="">
        <img :src="project.projectimg1" class="img1" alt="...">
        <div id="card-body" class="card-body justify-content-start">
            <router-link id="link" :to="{ name: 'ProjectDetails', params:{ id : project.projectID }}"> <!-- Router-link connect with router/index.js file. It send the id of the given item(project) in the forLoop, so we can then use it to present only data from that objectItem -->
                <h5 id="card-title" class="card-title ">{{project.projectTitle}}</h5>
            </router-link> 
    
          <p class="card-text">{{project.projectDescription}}</p>
          
        </div>
      </div>


    </div>


  </div>
  
</div>
</template>

<script>
//import { ref } from 'vue'
import getProjects from '../modules/getProjects'    // 1 Make getProject.js in modules folder


export default {
  setup() {

    const { projects } = getProjects();  // 1 

    return {
      projects,
   
      
    }
  }
}
</script>

<style lang="scss" scoped>

#box {
  display: flex;
  justify-content: center;
}


.row {
       --bs-gutter-x: 10rem; 
       margin: 0px;
       
       
}

.card {
    border: none;
   width: 300px;
   background-color: transparent;
    
}

.img1 {
  width: 300px;
  border: 10px solid white;
}

#card-body {
    background-color:transparent ;
    
}


#link {
    text-decoration: none;
    
}

#card-title {
    color: #333D29;
    text-decoration: none;
    border: #333D29 solid 1px;
    padding: 3px;
}

.card-text {
    color: #F88824;
}

@media all and (max-width: 576px) {
.row {
   --bs-gutter-x: 0rem; 
}
}


</style>
