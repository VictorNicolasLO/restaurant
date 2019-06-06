<template>
  <div class="nueva-mesa">
    <Form :fields="fields" :title="title" :buttonColor="buttonColor" :buttonText="buttonText"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Form from "../components/Form";
export default {
  name: "nueva-mes",
  data() {
    return {
      title: "Registrar mesa",
      buttonColor: "red",
      buttonText: "Guardar",
      fields: [
        {
          name: "numero_mesa",
          title: "Numero de la mesa"
        },
        {
          name: "des_mesa",
          title: "Descripciòn de la mesa"
        }
      ]
    };
  },
  components: { Form }
};
</script>
