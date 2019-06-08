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
  name: "editar-mes",
  methods: {
    async submit(data) {
      try {
        await api.put(`mesa/${this.$route.params.id}`, data);
        this.$swal("¡Listo!", "Mesa actualizada", "success");
        this.$router.push({ path: "/mesas" });
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
      title: "Actualizar mesa",
      buttonColor: "#5EA1F0",
      buttonIcon: "pencil-edit-button.png",
      buttonText: "Actualizar",
      fields: [
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
