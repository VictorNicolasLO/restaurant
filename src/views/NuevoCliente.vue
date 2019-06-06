<template>
  <div class="nuevo-cliente">
    <Form :fields="fields" :title="title"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Form from "../components/Form";
export default {
  name: "nuevo-cliente",
  data() {
    return {
      title: "Nuevo cliente",
      
      fields: [
        {
          name: "name",
          title: "Nombre"
        },
        {
          name: "apellidos",
          title: "Apellidos"
        },
        {
          name: "rfc",
          title: "RFC"
        }
      ]
    };
  },
  components: { Form }
};
</script>
