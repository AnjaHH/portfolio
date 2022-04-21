<template>
<div class="logo">
      <a href="/">
      <img id="biglogo" src="../../images/logo.png" alt="">
      </a>
    </div>
  <div class="container-md"> <!-- switch to margin x over MD size(fluid and !fluid) -->
    
    <div class="row"> 
        <!-- Start Test One: Video -->
      <div v-for="project in filteredProjectOnId" :key="project.projectID" id="row1" class="col-12 mb-4" >
        <div v-show="project.projectCategory == 'Video'" class="row" id="pd-video" style="">

            <div id="smallbox1" class="col-12 col-sm-6">
          <img :src="project.projectimg1" class="img1" alt="...">
           <h3 id="cardOne" class="card-title ">{{project.projectTitle}}</h3>
            <p class="card-text">{{project.projectText}}</p> 
          
          </div>
          <div id="smallbox2" class="col-12 col-sm-6">
                          <div class="pdffile2">
          <iframe src="https://drive.google.com/file/d/1cuSZjUaQcQSu_-mss_cC5ejV_v_FXbsP/preview" width="400" height="500" allow="autoplay"></iframe>              </div>
            </div>
            
          
          <div id="bigbox" class="embed-responsive embed-responsive-16by9">
              <iframe class="videoyoutube" width="560" height="315" src="https://www.youtube.com/embed/IGmiHUN4Fq8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              </div>
            
            <!-- tilføj div blokke, p eller h2 her med reference til getProjects.js -->
          
      
         <!--  EndTest One -->
        
        <!-- Test Two: Photo -->
        <div v-show="project.projectCategory == 'Photo'" class="row" id="pd-photo"  style="">
          
          <div id="smallbox1" class="col-12 col-sm-6">
          <img :src="project.projectimg1" class="img1" alt="...">
          <h3 id="cardOne" class="card-title ">{{project.projectTitle}}</h3>
            <p class="card-text">{{project.projectText}}</p>
          </div>
          <div id="smallbox2" class="col-12 col-sm-6">
              <img :src="project.projectimg2" class="img2" alt="...">
            
            
          </div>
          <div id="bigbox" class="col-12">
              <img :src="project.projectimg3" class="img3" alt="...">
              </div>
        </div>

        <!-- trapholt alene -->

        <div v-show="project.projectCategory == 'Photos'" class="row" id="pd-photos"  style="">
          
          <div id="smallbox1" class="col-12 col-sm-6">
          <img :src="project.projectimg1" class="img1" alt="...">
          <h3 id="cardOne" class="card-title ">{{project.projectTitle}}</h3>
            <p class="card-text">{{project.projectText}}</p>
          </div>
          <div id="smallbox2" class="col-12 col-sm-6">
              <div class="pdffile">
                <iframe src="https://drive.google.com/file/d/1bU-FeKyfeMuK-YzpCVvKdnGtrPCWDv40/preview" width="400" height="500" allow="autoplay"></iframe>
</div>
            
            
          </div>
          <div id="bigbox" class="col-12">
              <img :src="project.projectimg3" class="img3" alt="...">
              </div>
        </div>

      </div>
    </div>
    </div>
 
</template>

<script>
import { useRoute } from 'vue-router'
import { ref, computed } from 'vue'
import getProjects from '../modules/getProjects'


export default {
  setup() {
    const route = useRoute()
    const routeId = ref(route.params.id)

    const { projects } = getProjects();  // 1 
 
    let filteredProjectOnId = computed(() => { // using our route.params.id to only show data from the object with the same id
      return projects.value.filter(i => i.projectID == routeId.value)
    })

    return {
      route,
      projects,
      filteredProjectOnId    
    }
  }
}
</script>

<style lang="scss" scoped>



.card {
  background-color: transparent;
  border: none;
}

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

.row {
    margin-top: 20px;
}

.img1 {
    width: 400px;
   background-color: white;
   margin-bottom: 30px;
   border: 10px solid white;
}



.img2 {
    width: 400px;
    background-color: white;
    border: 10px solid white;
}

#bigbox {
    background-color: white;
    margin-top: 30px;
    margin-bottom: 30px;
    padding-bottom: 30px;
    padding-top: 30px;
}
.img3 {
    width: 600px;
}

h3 {
    padding-top: 30px;
}

p {
    padding-bottom: 50px;
}

@media all and (max-width: 576px) {
.img3 {
  width: 400px;
}
.videoyoutube {
  width: 450px;
  height: 250px;
}
}

</style>