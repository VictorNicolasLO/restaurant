<template>
  <div class="home">
    <TextField  :placeholder="placeholder" :title="title"/>
    <TextField  placeholder="a" title="b"/>
    <SmallInputs text="text" :disabled="false" :value="value" />
  </div>
</template>

<script>
// @ is an alias to /src
import TextField from "../components/TextField";
import SmallInputs from "../components/SmallInputs";
export default {
  name: "playground",
  data() {
    return {
      exampleData: "example",
      title: "Descripción de la Mesa:",
      placeholder:"Descripcion de la Mesa",
      value:0

    }
  },
  components: {
    TextField,
    SmallInputs
   // textito
  }
}
</script>
