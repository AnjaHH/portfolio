<template>
<div class="logo">
  <a href="/">
  <img class="imglogo" src="../../images/logo.png" alt="" >
  </a>
</div>
    <div class="container-fluid"> <!--  fjern fluid hvis den smadre design-->
  <div class="row">
    <div class="textbox">
      <img src="../../images/text.png" alt="">
    </div>
    <div id="column1" class="col-12 col-sm-6">
      
      
      <div class="box1">
       <h2>Hvem er jeg så?</h2>
       <p>Jeg er 23 år gammel og bor ikke langt fra Grindsted ca. midt i Jylland, godt ude på landet. Her trives jeg med lange udsigter, frisk luft og ro til kreativ udfoldelse. Jeg holder af minimalistiske, æstetiske og enkelte designs, hvor der er ro og plads til de vigtigste elementer.</p>
      </div>
<div class="text">
        <img src="../../images/paintbrush.png" alt="" style="width: 400px;">
      </div>
    </div>
    <div id="column2" class="col-12 col-sm-6">
      <div class="box2">
        <img src="../../images/mig1.png" alt="" >
      </div>
      

    </div>
  </div>

  <div id="skillsbox" class="col-12 col-sm-12">

    <h2>Mine Skills</h2>

    <div class="row col-12 ">
    <div id="text" class="col-6 ">
      <p>Adobe Pakken</p>
      <p>Office Pakken</p>
      <p>UI/UX Design</p>
      <p>Visual Studio Code</p>
      <p>Wordpress</p>
      </div>
  <div id="markers" class="col-6 ">
    <div class="rows">
      <img src="../../images/bar.png" alt="">
      <img src="../../images/bar.png" alt="">
      <img src="../../images/bar.png" alt="">
      <img src="../../images/bar.png" alt="">
      
    </div>
    <div class="rows">
      <img src="../../images/bar.png" alt="">
      <img src="../../images/bar.png" alt="">
      <img src="../../images/bar.png" alt="">
      <img src="../../images/bar.png" alt="">
      <img src="../../images/bar.png" alt="">
    </div>
    <div class="rows">
      <img src="../../images/bar.png" alt="">
      <img src="../../images/bar.png" alt="">
      <img src="../../images/bar.png" alt="">
      <img src="../../images/bar.png" alt="">
      <img src="../../images/bar.png" alt="">
    </div>
    <div class="rows">
      <img src="../../images/bar.png" alt="">
      <img src="../../images/bar.png" alt="">
      <img src="../../images/bar.png" alt="">
    </div>
    <div class="rows">
      <img src="../../images/bar.png" alt="">
      <img src="../../images/bar.png" alt="">
      <img src="../../images/bar.png" alt="">
    </div>
    
    </div>
  </div>
</div>

<div id="image" class="col-12"> 
  <img src="../../images/big-01.png" alt="">
</div>

<div id="projectholder" >
  <h2>Projekter</h2>
  <ProjectComponent />
</div> 

<div id="contact" class="row">
  <h2>Kontakt mig</h2>
  <div id="info" class="col-12 col-sm-6">
    <h3>Skal vi samarbejde?</h3>
    <h4>Jeg lytter til jeres/dine ønsker og - Jeg giver gerne et uforpligtende tilbud</h4>
    <div class="mail-tlf">
    <a href="mailto:anjahh98@gmail.com">Email: anjahh98@gmail.com</a>
    <p></p>
    <a href="tel:+4520348747">Tlf: +45 20348747</a>
    </div>


    
    
  </div>
  <div id="image" class="col-12 col-sm-6">
    <img src="../../images/AnjaC.png"  alt="">
  </div>
  <img class="imglogosmall" src="../../images/logo.png" alt="">

</div>

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

<style lang="scss" scoped>
.logo {
  display:flex;
  justify-content: flex-end;
  align-content: right;
  z-index: 9999;
}
.imglogo {
  width: 100px;
  margin-right: 30px;
  margin-top: 30px;
  margin-bottom: 30px;
}

.textbox {
  margin-top: -120px;
  
  img {
    width: 80vw;
  }
}

.row {
  padding-bottom: 70px;
  margin: 0px;
  
}

.box1 {

  h2 {
    margin-top: 30px;
  }
  h2, p {
    padding-top: 50px;
    margin-right: 40px;
    margin-left: 40px;
  }
  p {
    margin-bottom: 30px;
}
}

.box2 {
  img {
    margin-top: 30px;
    width: 450px;
    border: white solid 10px;
  }
}

#skillsbox {
  margin-bottom: 50px;
  h2 {
    margin-bottom: 40px;
    margin-top: 40px;
  }
}
#markers {
  
  .rows {
    padding: 16px;
    display: flex;
    align-content: flex-start;
    padding-right: 30px;
    
  img {
    width: 50px;
    
    padding-right: 10px;
  }
  }
}

#image {
  
  
  img {
    width: 900px;
    border: solid white 10px;
  }
}

#projectholder {

h2 {
  padding-bottom: 50px;
  padding-top: 30px;
}
}

#contact {
  h2 {
    margin-bottom: 30px;
    
    background-color: #333D29;
    padding: 20px;
    color: #E6E3D9;
  
    
  }
  h3 {
    font-style: bold;
    padding-bottom: 20px;
  }
  h4 {
    font-style: italic;
    padding-bottom: 20px;
  }
  #info {
    margin-top: 50px;
    margin-bottom: 20px;

    a {
      margin-top: 50px;
    }
  }
  #image {
    padding-left: 1px;
    img {
      width: 350px;
      border: white solid 10px;
    }
  }
  
  .imglogosmall {
    
    width: 200px;
    position: absolute;
    margin-left: 650px;
    margin-top: 300px;
  }

  button {
    background-color: #333D29;
    color:#E6E3D9;
    border: none;
    font-weight: bold;
    padding: 10px;

  }
}

.mail-tlf {
  a {
    color: #F88824;
    text-decoration: none;
    
  }
}

@media all and (max-width: 576px) {
  .imglogo {
    width: 70px;
  }

  .textbox {
  margin-top: -100px;
  
  
  img {
    width: 80vw;
  }
}
.box2 {
  img {
    width: 300px;
    border: white solid 10px;
  }
}

#contact {

  h2 {
    background-color: #333D29;
    padding: 20px;
    color: #E6E3D9;
  }
  
  .imglogosmall {
    width: 150px;
    margin-left: 250px;
    margin-top: 600px;
    
  }
}

#markers {
  
  .rows {
    padding: 18px;
    display: flex;
    align-content: flex-start;
    padding-right: 30px;
    
  img {
    width: 30px;
    
    padding-right: 10px;
  }
  }
}
#image {
  
  
  img {
    width: 350px;
    border: solid white 10px;
  }
}
}


  
</style>

