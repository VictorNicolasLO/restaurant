<template>
  <div class="buttonContainer" :style="styling" @click="onClick" v-tooltip="tooltip">
    <img :src="imageIcon">
  </div>
</template>

<script>
//import rubbish from '../assets/icons/rubbish-bin.png'

export default {
  props: {
    color: String,
    img: String,
    tooltip: String
  },
  computed: {
    imageIcon: function() {
      return require(`../assets/icons/${this.img}`);
    },
    styling: function() {
      return {
        "background-color": this.color
      };
    }
  },
  methods: {
    onClick(ev) {
      this.$emit("click", ev);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

.buttonContainer {
  cursor: pointer;
  padding: 5px 5px 1px 5px;
  display: inline-block;
  border-radius: 5px;
  text-align: center;
}

img {
  height: 24px;
}
</style>