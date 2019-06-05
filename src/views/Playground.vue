<template>
  <div class="home">
    <IconButton color="#FC5757" :img="bin" @click="al"/>
  </div>
</template>

<script>
// @ is an alias to /src
import IconButton from "../components/IconButton.vue"
import bin from "../assets/icons/rubbish-bin.png"

export default {
  name: "playground",
  data() {
    return {
      exampleData: "example",
      bin
    };
  },
  components: {
    IconButton
  },
  methods:{
    al(){
      alert("ksdfhad")
    }
  }
};
</script>
