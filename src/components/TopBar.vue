<template>
  <div class="topBar">
    <div class="div1">
      <div class="hom" @click="goHome($event)">
        <img :src="ima1">
      </div>
      <div class="ini">
        <div>N</div>
      </div>
      <div class="rest">{{restaurant}}</div>
    </div>
    <div class="usu">
      <div class="usui">
        <img :src="ima2">
      </div>
      <div class="usun">{{user}}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    ima1: String,
    ima2: String,
    restaurant: String,
    user: String
  },
  methods: {
    goHome(ev) {
      this.$emit("click", ev);
    }
  }
};
</script>
<style scoped>
.topBar {
  width: 100%;
  height: 67px;
  background-color: #333333;
  display: inline-block;
}
.div1 {
  display: inline-block;
  width: 70%;
  position: relative;
  text-align: left;

  box-sizing: border-box;

  /* left: -170px; */
}
.hom {
  background-color: #4f4f4f;
  display: inline-block;
  width: 67px;
  height: 67px;
  text-align: center;
  vertical-align: top;
  cursor: pointer;
}
.hom img {
  text-align: center;
  width: 35px;
  height: 38px;
  margin-top: 14px;
}
.ini {
  text-align: center;
  display: inline-block;
  width: 42px;
  height: 42px;
  background-color: white;
  color: black;
  border-radius: 30px;
  vertical-align: top;
  margin-left: 15px;
  margin-top: 12px;
}
.ini div {
  margin-top: 13px;
}
.rest {
  color: white;
  display: inline-block;
  margin-top: 24px;
  margin-left: 15px;
}
.usu {
  display: inline-block;
  width: 29%;
  text-align: right;
  padding-right: 10px;
}
.usui {
  display: inline-block;

  /* margin-left: 450px;  */
}
.usui img {
  width: 23px;
  height: 24px;
  position: relative;
  top: 5px;
}
.usun {
  display: inline-block;
  color: white;
  margin-left: 15px;
}
</style>