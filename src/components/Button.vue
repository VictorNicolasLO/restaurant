<template>
  <div class="button" :style="styling" @click="onClick($event)">
    <div class="texto">{{text}}</div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  props: {
    color: String,
    text: String
  },
  computed: {
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
<style scoped>
.button {
  padding: 0 5px;
  width: 92px;
  height: 38px;
  border-radius: 5px;
  color: white;
  cursor: pointer;
}
.texto {
  padding-top: 9.5px;
}
</style>

