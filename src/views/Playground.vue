<template>
  <div class="home">

    <!-- <TopBar :img="img1"> -->
    <top-bar restaurant="Hola como esta todo" :img="home" />


  </div>
</template>

<script>
// @ is an alias to /src
import TopBar from "../components/TopBar.vue"
import home from "../assets/icons/home.png"
export default {
  name: "playground",
  data() {
    return {
        home
     };

  },
  components: {
    TopBar
  }
  // methods:{
  //   show(){
  //     alert("Hola mundo")
  //   }
  // }
};
</script>
