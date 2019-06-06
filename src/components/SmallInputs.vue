<template>
    <div>
    <input class="SInput" type="number" min="0" :value="value" :disabled="disabled" @input="onInput"/> 
    </div>
</template>

<script>
export default {
    name:"SmallInputs", 
    props:{
        value:Number,
        disabled:Boolean
    },
    methods: {
    onInput(e) {
      this.$emit("input", e.target.value);
    }
  }
};
</script>


<style scope >
.SInput{
     position: absolute;
     width: 42px;
     height:15px;
     margin-top:5px;
     border: 1px solid gray;
     border-radius: 5px;
     font-family: 'Roboto';
     font-style: normal;
     font-weight: normal;
     font-size: 16px;
     line-height: 19px;
     text-align: center;

     color: #000000;
}

    
</style>