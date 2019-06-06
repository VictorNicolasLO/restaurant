<template>
  <div class="home">
    <!-- <TopBar :img="img1"> -->
    <top-bar
      restaurant="Nombre del restaurant"
      user="Nombre del usuario"
      :ima1="img1"
      :ima2="img2"
      @click="show"
    />
  </div>
</template>

<script>
// @ is an alias to /src

import TopBar from "./components/TopBar.vue";
import img1 from "./assets/icons/home.png";
import img2 from "./assets/icons/man-user.png";

export default {
  name: "playground",
  data() {
    return {
      img1,
      img2
    };
  },
  components: {
    TopBar
  },
  methods: {
    al() {
      alert("adsfasdf");
    }
  }
};
</script>
