<template>
  <div class="home">
    <TextField :placeholder="placeholder" :title="title"/>
    <TextField placeholder="a" title="b"/>
    <LargeButton text="boton" color="#7ed97c" img="disk.png"/>
  </div>
</template>

<script>
// @ is an alias to /src

import TextField from "../components/TextField";
import LargeButton from "../components/LargeButton";

export default {
  name: "playground",
  data() {
    return {
      exampleData: "example",

      headers: [
        { title: "Producto" },
        { title: "Nombre" },
        { title: "Cantidad" },
        { title: "Total" }
      ],
      items: [
        {
          Producto: "1",
          Nombre: "Producto 1",
          Cantidad: "2",
          Total: "50"
        },
        {
          Producto: "2",
          Nombre: "Producto 2",
          Cantidad: "3",
          Total: "75"
        }
      ]
    };
  },
  components: {
    TextField,
    LargeButton
    // textito
  }
};
</script>
