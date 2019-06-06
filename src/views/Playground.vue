<template>
  <div class="home">
    <TextField :placeholder="placeholder" :title="title"/>
    <TextField placeholder="a" title="b"/>
    <Ticket :totalcliente=108.00 :iva=17.28 :total=125.28 />
  </div>
</template>

<script>
// @ is an alias to /src

import TextField from "../components/TextField";
import Ticket from "../components/Ticket";
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
    Ticket
  }
};
</script>
