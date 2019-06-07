<template>
  <div class="home">
    <IconButton color="#FC5757" :img="bin" @click="al"/>
    <GenericTable width="900px" :headers="headers" :items="items" />
  </div>
</template>

<script>
// @ is an alias to /src
import IconButton from "../components/IconButton.vue"
import GenericTable from "../components/GenericTable.vue"
import bin from "../assets/icons/rubbish-bin.png"

export default {
  name: "playground",
  data() {
    return {
      exampleData: "example",
      bin,
      headers:[
        {title:"Producto"},
        {title:"Nombre"},
        {title:"Cantidad"},
        {title:"Total"}
      ],
      items:[
        {
          Producto: "1",
          Nombre: "Producto 1",
          Cantidad: "2",
          Total: "50"   
        },
        {
          Producto: "2",
          Nombre: "Producto 2",
          Cantidad: "3",
          Total: "75"  
        }
      ]
    };
  },
  components: {
    IconButton,GenericTable
  },
  methods:{
    al(){
      alert("ksdfhad")
    }
  }
};
</script>
