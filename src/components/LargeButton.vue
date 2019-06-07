<template>
  <button @click="handleClick" :style="style" id='largeButton'>
    <img class="iconImage" v-bind:src="imageIcon()" />
    {{text}}</button>
</template>

<script>
export default {
  name: 'largeButton',
  props: {
    text: {
      type: String,
      required: true,
    },
    color:{
      type: String,
      required: true,
    },
    img:{
      type: String,
      required: false,
    },
  },
  computed: {
    style() {
      return `background-color: ${this.color}`;
    }
  },
  methods:{
    imageIcon() {
      return require(`../assets/${this.img}`);
    },
    handleClick() {
      this.$emit('clicked');
    }
  }
}
</script>

<style>
  #largeButton{
    border-radius: 5px;
    outline: none;
    border: none;
    padding: 10px;
    color: #ffffff;
    font-size: 18px;
    width: 180px;
    display: flex;
    justify-content: center;
  }
  .iconImage{
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
</style>

