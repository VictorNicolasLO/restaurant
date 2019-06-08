<template>
  <div class="container" :style="styling">
    <div class="title">
      <span class="title-span">{{title}}</span>
      <LargeButton
        class="form-button"
        :color="buttonColor"
        :text="buttonText"
        :img="buttonIcon"
        @click="sumbit"
      />
    </div>
    <div class="fields-container">
      <div v-for="(field,index) in fields" class="field-container" :key="index">
        <TextField :placeholder="field.title" :title="field.title" v-model="formData[field.name]"/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TextField from "./TextField";
import LargeButton from "./LargeButton";

export default {
  methods: {
    sumbit() {
      this.$emit("submit", this.formData);
    }
  },
  data() {
    return {
      formData: {}
    };
  },
  props: {
    title: String,
    fields: Array,
    onSubmit: Function,
    buttonColor: String,
    buttonIcon: String,
    buttonText: String
  },
  components: {
    TextField,
    LargeButton
  }
};
</script>
<style scoped>
.container {
  margin-top: 40px;
  text-align: center;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}
.fields-container {
  margin: auto;
  display: flex;
  width: calc(100% - 100px);
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-content: center;
  box-sizing: border-box;
}
.fields-container > * {
  flex-grow: 1;
  padding: 0 10px;
  margin: 0 25px;
  box-sizing: border-box;
}
.title-span {
  font-size: 1.5em;
}
.title {
  width: 100%;
  text-align: left;
  padding-left: 90px;
  font-weight: 700;
  margin-bottom: 40px;
  box-sizing: border-box;
}
.form-button {
  float: right;
  margin-right: 80px;
}
</style>
