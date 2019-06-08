<template>
  <div class="home">
    <div>
      <h1>Bienvenidos a tu sistema de gestión de restaurante</h1>
      <h2>¿Qué deseas hacer?</h2>
      <Card
        title="Mesas"
        description="Proceso principal del sistema"
        @click="goMesas"
        :img="table"
      />
    </div>
  </div>
</template>

<script>
import Card from "../components/Card";
// @ is an alias to /src
import table from "../assets/icons/dinner-table.png";

export default {
  name: "home",
  methods: {
    goMesas() {
      this.$router.push({ path: "mesas" });
    }
  },
  data() {
    return {
      table
    };
  },
  components: { Card }
};
</script>

<style scoped>
* {
  text-align: center;
}
h1 {
}
h2 {
  color: gray;
}
</style>