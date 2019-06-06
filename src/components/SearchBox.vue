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
      if (ev) {
        alert(ev.target.tagName);
      }
    }
  }
};
</script>
<style scoped>
input {
  padding: 5px;
}
</style>