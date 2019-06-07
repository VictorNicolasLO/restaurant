<template>

<table style="width:100%">
  <tr>
    <th v-for="(item,i) in headers" :key="i">{{item.head}}</th>
  <tr v-for="(customer,i) in customers" :key="i">  
    <td>{{i+1}}</td>
    <td>{{customer.name}}</td>
    <td></td>
  </tr>

</table>


</template>


<script>
  export default {
    data(){
      return{
        headers:[
          {head:"Numero"},
          {head:"Nombre Producto"},
          {head:"Cantidad"},
          {head:"total"}
        ],
        customers:[
          {name:"Customer one"},
          {name:"Customer two"}
        ],
        cantidades:[
          {number:"55"},
          {number:"22"}
        ]
      }
    }

  }
</script>

<style scoped>
table, th, td {
  border: 1px solid black;
}
</style>

