<template>
 <div class="container-md"> <!-- switch to margin x over MD size(fluid and !fluid) -->
  <div class="row">

                  <!-- Switched out project in projects, with searchedProjects, so it changes based on input from search/category -->
    <div v-for="project in searchedProjects" :key="project.projectID" class="col-12 col-sm-6 col-md-4 mb-4" > <!-- Add v-else to see effect -->
      <div class="card">
        <img :src="project.projectimg1" class="card-img-top" alt="...">
        <div class="card-body justify-content-start">
          <!-- // 1 (also go to router/index.js) -->
          <router-link :to="{ name: 'ProjectDetails', params:{ id : project.projectID }}"> <!-- Router-link connect with router/index.js file. It send the id of the given item(project) in the forLoop, so we can then use it to present only data from that objectItem -->
            <h5 id="cardOne" class="card-title ">{{project.projectTitle}}</h5>
          </router-link>  
          <p class="card-text">{{project.projectDescription}}</p>
          <p>Category: <span :class="project.projectCategory" id="projectCategoryText">{{project.projectCategory}}</span></p>
          <a href="#" class="btn btn-primary">Go somewhere {{project.projectID}}</a>
        </div>
      </div>
    </div>
  </div>
  
</div>
</template>

<script>

import getProjects from '../modules/getProjects'    // 1 Make getProject.js in modules folder
// 2 Make router-link + route/index.js setup

export default {
  setup() {
    



    const { projects } = getProjects();  // 1 

  

  

    return {
 

      projects, // Expose our "database" variable, which is an array with objects inside                                // 1
   
      
    }
  }
}
</script>

<style scoped>
#cardOne{
  color:red
}
.active {
  background-color: khaki;
  
}
.text-color {
  color:darkviolet;
}

</style>

<style lang="scss"> 
#projectCategoryText {
  font-weight: bold;
  font-size: 14px;
  
}


</style>

