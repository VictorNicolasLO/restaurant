<template>
    <div class="button" :style="stylling">
    {{ text }}    
    </div>
</template>

<script>
export default {
    name:"button",
    props:{
        text: String,
        color: String
    },
    computed: {
        stylling: function(){
            return {
                "background-color": this.color
            }

        }
    }
}
</script>

<style scope>
 .button{
     border-radius:10px;
 }
</style> 