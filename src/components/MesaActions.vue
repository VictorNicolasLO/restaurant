<template>
  <div class="card" @click="onClick">Hola mundo</div>
</template>

<script>
export default {
  name: "MesaActions",
  props: {},

  methods: {
    onClick(ev) {
      this.$emit("click", ev);
    }
  }
};
</script>

<style scoped>
</style>

