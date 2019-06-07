<template>
  <div class="home">
    <TextField :placeholder="placeholder" :title="title"/>
    <TextField placeholder="a" title="b"/>
    <LargeButton text='boton' color='#7ed97c' img='disk.png'/>
  </div>
</template>

<script>
// @ is an alias to /src

import TextField from "../components/TextField";
import LargeButton from '../components/LargeButton'
export default {
  name: "playground",
  data() {
    return {
      exampleData: "example",
      title: "Descripción de la Mesa:",
      placeholder: "Descripcion de la Mesa"
    };
  },
  components: {
    TextField,
    LargeButton,
    // textito
  }
};
</script>
