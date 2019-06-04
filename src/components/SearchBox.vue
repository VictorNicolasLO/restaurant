<template>
  <div class="home">
    <input type="text" :placeholder="placeholder" :value="value" @input="onInput">
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "searchBox",
  props: {
    placeholder: String,
    value: String
  },
  methods: {
    onInput(ev) {
      this.$emit("input", ev.target.value);
    }
  }
};
</script>
<style scope>
input {
  padding: 5px;
}
</style>