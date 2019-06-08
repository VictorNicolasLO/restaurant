<template>
  <button @click="handleClick" :style="style" id="largeButton">
    <img class="iconImage" v-bind:src="imageIcon()">
    {{text}}
  </button>
</template>

<script>
export default {
  name: "largeButton",
  props: {
    text: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: false
    }
  },
  computed: {
    style() {
      return `background-color: ${this.color}`;
    }
  },
  methods: {
    imageIcon() {
      return require(`../assets/icons/${this.img}`);
    },
    handleClick(ev) {
      this.$emit("click", ev);
    }
  }
};
</script>

<style>
#largeButton {
  cursor: pointer;
  border-radius: 5px;
  outline: none;
  border: none;
  padding: 10px;
  color: #ffffff;
  font-size: 18px;
  display: flex;
  justify-content: center;
  font-weight: 700;
}
.iconImage {
  height: 20px;
  margin-right: 10px;
}
</style>

