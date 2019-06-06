<template>
  <div class="topBar" >
    <div class="hom">
      <img :src="imag"/>
  </div>
  <div class="ini">   
    <div>
      N
    </div>
  </div>
  <div class="rest">
      {{restaurant}}
  </div>
</div> 
</template>
<script>
export default {
  props: {
      imag: String,
      restaurant: String
  },
  methods: {
    onClick(ev) {
      this.$emit("click",ev)
    }
  }
};
</script>
<style scope>
.topBar{
    width: 1024px;
    height: 67px;
    background-color: #333333;
    display: inline-block;
    
}
.hom{
  
  background-color: #4F4F4F;
  display: inline-block;
  width: 67px;
  height: 67px;
  /* margin-left:-900px; */
  vertical-align: top;

}
.hom img{

  width: 35px;
  height: 38px;
  margin-top: 14px; 
}
.ini{
   display: inline-block;
  width: 42px;
  height: 42px;
  background-color: white;
  color: black;
  border-radius: 20px;
  vertical-align: top;
  margin-left: 15px;
  margin-top:15px;
}
.ini div{
  margin-top: 12px;
}
.rest{
  color: white;
  display: inline-block;
  margin-top: 26px;
  margin-left: 15px;
}
</style>