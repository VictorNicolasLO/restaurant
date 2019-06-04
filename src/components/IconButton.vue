<template>
    <div class="buttonContainer" :style="styling" >
      <img :src="img" />
    </div>
</template>

<script>
//import rubbish from '../assets/icons/rubbish-bin.png'

export default {
  props:{
      color: String,
      img:String
  },
  computed: {
      styling: function(){
          return{
              'background-color':this.color
          }
      }
  } 
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


h1, h2 {
  font-weight: normal;
}

.buttonContainer{
  padding: 5px 5px 1px 5px;
  display: inline-block;
  border-radius: 5px;
}

img{
  width: 25px;
  height: 24px;
}

</style>