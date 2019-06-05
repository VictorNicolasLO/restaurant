<template>
  <div class="home">
    <TextField  :placeholder="placeholder" :title="title"/>
    <TextField  placeholder="a" title="b"/>
  </div>
</template>

<script>
// @ is an alias to /src
import TextField from "../components/TextField";
export default {
  name: "playground",
  data() {
    return {
      exampleData: "example",
      title: "Descripción de la Mesa:",
      placeholder:"Descripcion de la Mesa"
    }
  },
  components: {
    TextField
   // textito
  }
}
</script>
