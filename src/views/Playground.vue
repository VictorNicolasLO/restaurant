<template>
  <div class="home">
    Aqui practica con tus componentes
    {{exampleData}}
    <SearchBox v-model="exampleData"/>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchBox from "../components/SearchBox";

export default {
  name: "playground",
  data() {
    return {
      exampleData: "example"
    };
  },
  components: {
    SearchBox
  }
};
</script>
