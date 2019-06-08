<template>
  <div class="nueva-mesa">
    <Form
      :fields="fields"
      :title="title"
      :buttonIcon="buttonIcon"
      :buttonColor="buttonColor"
      :buttonText="buttonText"
      @submit="submit"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Form from "../components/Form";
import { api } from "../api";
export default {
  name: "nueva-mes",
  methods: {
    async submit(data) {
      try {
        await api.post("mesa", data);
        this.$swal("¡Listo!", "Mesa creada", "success");
        this.$router.push({ path: "mesas" });
      } catch (err) {
        this.$swal(
          "Error",
          "Ups, verifique si el numero de mesa ya existe o los campos no esten vacíos",
          "error"
        );
        console.log(err);
      }
    }
  },
  data() {
    return {
      title: "Registrar mesa",
      buttonColor: "#7ED87C",
      buttonIcon: "group-table.svg",
      buttonText: "Guardar",
      fields: [
        {
          name: "id_Mesa",
          title: "Numero de la mesa"
        },
        {
          name: "Desc_Mesa",
          title: "Descripción de la mesa"
        }
      ]
    };
  },
  components: { Form }
};
</script>
