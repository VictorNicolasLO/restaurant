<template>
  <div id="app">
    <!-- <TopBar :img="img1"> -->
    <top-bar
      restaurant="Nombre del restaurant"
      user="Nombre del usuario"
      :ima1="img1"
      :ima2="img2"
      @click="show"
    />
    <router-view/>
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
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>