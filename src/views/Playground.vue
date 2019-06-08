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
    Ticket
  }
};
</script>
