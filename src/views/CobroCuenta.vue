<template>
  <div class="editar-orden">
    <div class="title">
      Cobro cuenta
    </div>
    <br>
    <div class="nombreMesa">
      Nombre mesa
    </div>
    <div class="cobroSeparado">
      Cobro por separado
    </div>
    <div class="cobroConjunto">
      Cobro en conjunto
    </div>
    <br>
    <div>
      <input type="input" placeholder="Mesa 1">
    </div>
      <LargeButton class="largePurple" color="#6835F7" img="multiple-users-silhouette.png"/>
      <LargeButton class="largeBrown" color="#A59595" img="multiple-users-silhouette.png"/>
    <br>
    <div class="cliente">
      Cliente
    </div>
    <br>
    <GenericTable class="genericTable" width="900px" :headers="headers" :items="items"  />
    <br>
    <LargeButton class="cobrar" text="Cobrar" color="#4D4C8A" img="pay.png"/>

    
    
  </div>

</template>

<script>

import LargeButton from "../components/LargeButton";
import GenericTable from "../components/GenericTable";


// @ is an alias to /src
export default {
  name: "editar-orden",
  components:{
    LargeButton,GenericTable
  },
  data(){
    return{
      headers:[
        {title:"Producto"},
        {title:"Nombre"},
        {title:"Fecha"},
        {title:"Cantidad"},
        {title:"Total"}
      ],
      items:[
        {
          Producto:"1",
          Nombre:"nombre del producto 1",
          Fecha:"03/06/2019 16:00pm",
          Cantidad:"1",
          Total:"$68.00"
        },
        {
          Producto:"2",
          Nombre:"nombre del producto 1",
          Fecha:"03/06/2019 16:00pm",
          Cantidad:"1",
          Total:"$25.00"
        }
      ]
    }
  }
};
</script>

<style scoped>

.title{
position: absolute;
width: 233px;
height: 40px;
left: 22px;
top: 105px;

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 25px;
line-height: 29px;
text-align: center;

color: #000000;
}

.nombreMesa{
position: absolute;
width: 181px;
height: 21px;
left: 27px;
top: 183px;

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 19px;
text-align: center;

color: #000000;
}

.cobroSeparado{
position: absolute;
width: 181px;
height: 21px;
left: 363px;
top: 183px;

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 19px;
text-align: center;

color: #000000;
}

.cobroConjunto{
position: absolute;
width: 181px;
height: 21px;
left: 669px;
top: 183px;

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 19px;
text-align: center;

color: #000000;
}

input{
position: absolute;
width: 296px;
height: 34px;
left: 67px;
top: 220px;

background: #ECECEC;
border: 1px solid #646464;
box-sizing: border-box;
border-radius: 5px;
}

.largePurple{
  width: 300px;
  position: absolute;
width: 295px;
height: 34px;
left: 380px;
top: 220px;
}

.largeBrown{
position: absolute;
width: 289px;
height: 34px;
left: 692px;
top: 220px;  
}

.cliente{
position: absolute;
width: 77px;
height: 20px;
left: 54px;
top: 281px;

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 17px;
line-height: 20px;
/* identical to box height */


color: #000000;

}


.genericTable{
  position: absolute;
  top: 308px;
  left: 70px;
}

.cobrar{
  position: absolute;
width: 190px;
height: 40px;
left: 67px;
top: 437px;
}

</style>
