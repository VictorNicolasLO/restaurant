<template>
  <input type="text" :placeholder="placeholder" :value="value" @input="onInput">
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
<style scoped>
input {
  border-radius: 4px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  display: inline-block;
  align-items: center;
  text-align: left;

  -webkit-appearance: none;
  border: solid 1px gray;

  padding: 8px 0;
  padding-left: 10px;
}
:-webkit-autofill {
  color: #fff !important;
}
</style>