<template>
  <div>
    <div class="Texto">{{title}}</div>
    <input type="text" :placeholder="placeholder" @input="onInput">
  </div>
</template>

<script>
export default {
  name: "TextField",
  props: {
    placeholder: String,
    title: String
  },
  methods: {
    onInput(e) {
      this.$emit("input", e.target.value);
    }
  }
};
</script>

<style scope>
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
  width: 100%;
  padding: 8px 0;
  padding-left: 10px;
}
.Texto {
  width: 100%;
  font-family: "Roboto";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-align: left;
  color: #000000;
  padding-left: 10px;
  margin-bottom: 10px;
}
::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #a6a6a6;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #a6a6a6;
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: #a6a6a6;
}
</style> 