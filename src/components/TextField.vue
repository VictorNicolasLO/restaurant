<template>
    <div>
    <div class="Texto">
       {{title}}
    </div>
    <input type="text" :placeholder="placeholder"  @input="onInput"/> 
    </div>
</template>

<script>
export default {
    name:"TextField", 
    props:{
        placeholder:String,
        title:String
    },
    methods: {
    onInput(e) {
      this.$emit("input", e.target.value);
    }
  }
};
</script>

<style scope>
 input{
     border-radius:4px;
     font-family: 'Roboto';
     font-style: normal;
     font-weight: normal;
     font-size: 16px;  
     line-height: 19px;
     display: inline-block;
     align-items: center;
     text-align: center;
     color: #A6A6A6;
    -webkit-appearance:none;
    border: solid 1px gray;
 }
 .Texto{
     font-family: 'Roboto';
     font-style: normal;
     font-weight: normal;
     font-size: 16px;
     line-height: 19px;
     text-align: center;
     color: #000000;
 }
</style> 