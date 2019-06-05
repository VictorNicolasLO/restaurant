<template>
    <div class="card" @click="onClick($event)">
        <img class="img" :src="img" />
        <div class="title">{{title}}</div>
        <div class="description">{{description}}</div>
    </div>
</template>

<script>
export default {
    name:"Card",
    props:{
        title:String,
        description:String,
        img:String
    },
    methods:{
        onClick(ev) {
            alert(ev.target.tagName);
            }
    }
}
</script>

<style scoped>

.card{
    width: 185px;
    height: 183px;
    background: #FBFBFB;
    border: 1px solid #0A0A0A;

    box-sizing: border-box;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
    border-radius: 10px;

    display: inline-block;
}

.img{
    width: 90px;
    height: 90px;
    left: 16px;
    margin-top: 14px;
}

.title{
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    margin-top: 12px;

    color: #596482;
}

.description{



    font-family: Roboto;
    font-style: normal;
    font-weight: 200;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    padding: 0px 15px 5px 15px;

    color: #000000;
}

</style>

