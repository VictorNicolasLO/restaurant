<template>

<table cellspacing="0" style="width:100%">
  <tr>
      <th v-for="(head,i) in headers" :key="i">{{head.title}}</th>
  </tr>
  <tr v-for="(item,i) in items" :key="i">  
    <td v-for="(head,i) in headers" :key="i">
      {{item[head.title]}}
    </td>
  </tr>
</table>

</template>


<script>
  export default {
    props:{
      width: String,
      headers:[],
      items:[]
    }
  }
</script>

<style scoped>


th{
  color: #918D8D;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
}

td,th{
  border-bottom: 0.5px solid #9C9C9C;
}
</style>

