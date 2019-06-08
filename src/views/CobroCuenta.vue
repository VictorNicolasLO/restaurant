<template>
  <div class="container">
    <div class="title">
      Cobro cuenta
    </div>
    <div class="namesContainer">
      <div class="nombreMesa">
        Nombre mesa
        <br>
        <input type="input" placeholder="Mesa 1">
      </div>
      <div class="cobroSeparado">
        Cobro por separado
        <br>
          <LargeButton class="largePurple" color="#6835F7" img="multiple-users-silhouette.png"/>
      </div>
      <div class="cobroConjunto">
        Cobro en conjunto
        <br>
          <LargeButton class="largeBrown" color="#A59595" img="multiple-users-silhouette.png"/>
      </div>
    </div>
    

    <div class="cliente">
      Cliente
      <br>
      <GenericTable class="genericTable" width="900px" :headers="headers" :items="items"  />
    </div>
    
    <div class="totalContainer">
      <LargeButton class="cobrar" text="Cobrar" color="#4D4C8A" img="pay.png"/>
      <Ticket class="ticket" :totalcliente="93" :iva="14.88" :total="107.88" />
    </div>


    <div class="cliente">
      Cliente
      <br>
      <GenericTable class="genericTable" width="900px" :headers="headers" :items="items2"  />
    </div>
    
    <div class="totalContainer">
      <LargeButton class="cobrar" text="Cobrar" color="#4D4C8A" img="pay.png"/>
      <Ticket class="ticket" :totalcliente="93" :iva="14.88" :total="107.88" />
    </div>
 

  </div>

</template>

<script>

import LargeButton from "../components/LargeButton";
import GenericTable from "../components/GenericTable";
import Ticket from "../components/Ticket";


// @ is an alias to /src
export default {
  name: "editar-orden",
  components:{
    LargeButton,GenericTable,Ticket
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
        },
        
        {
          Producto:"2",
          Nombre:"nombre del producto 1",
          Fecha:"03/06/2019 16:00pm",
          Cantidad:"1",
          Total:"$25.00"
        },
        
        {
          Producto:"2",
          Nombre:"nombre del producto 1",
          Fecha:"03/06/2019 16:00pm",
          Cantidad:"1",
          Total:"$25.00"
        },
        
        {
          Producto:"2",
          Nombre:"nombre del producto 1",
          Fecha:"03/06/2019 16:00pm",
          Cantidad:"1",
          Total:"$25.00"
        },
        
        {
          Producto:"2",
          Nombre:"nombre del producto 1",
          Fecha:"03/06/2019 16:00pm",
          Cantidad:"1",
          Total:"$25.00"
        },
        
        {
          Producto:"2",
          Nombre:"nombre del producto 1",
          Fecha:"03/06/2019 16:00pm",
          Cantidad:"1",
          Total:"$25.00"
        }
      ],
      items2:[
        {
          Producto:"3",
          Nombre:"nombre del producto 3",
          Fecha:"03/06/2019 16:00pm",
          Cantidad:"1",
          Total:"$89.00"
        },
        {
          Producto:"4",
          Nombre:"nombre del producto 4",
          Fecha:"03/06/2019 16:00pm",
          Cantidad:"1",
          Total:"$19.00"
        }
      ]
    }
  }
};
</script>

<style scoped>
.container{
  position: relative;
  margin: 0px auto;
  width: 55%;

}

.title{

position: relative;
margin-top: 40px;

text-align: left;

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 25px;
line-height: 29px;


color: #000000;
}

.namesContainer{
  text-align: left;
  margin-top: 38px;
}

.nombreMesa{
display: inline-block;
position: relative;
float: left;
margin-right: 17px;

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 19px;
text-align: left;;

color: #000000;
}

.cobroSeparado{
display: inline-block;
position: relative;
float: left;
margin-right: 17px;


font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 19px;
text-align: left;

color: #000000;
}

.cobroConjunto{
display: inline-block;
position: relative;
float: left;


font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 19px;
text-align: left;

color: #000000;
}


input{
position: relative;
width: 296px;
height: 34px;
display: inline-block;
float: left;
padding-left: 5px;

background: #ECECEC;
border: 1px solid #646464;
box-sizing: border-box;
border-radius: 5px;
}

.largePurple{
width: 300px;
position: relative;
width: 295px;
height: 34px;
display: inline-block;
}

.largeBrown{
position: relative;
width: 289px;
height: 34px;
display: inline-block;
}

.cliente{
position: relative;
margin-top: 27px;
float: left;
text-align: left;

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 17px;
line-height: 20px;
/* identical to box height */


color: #000000;

}


.genericTable{
  margin-top: 7px;
  position: relative; 
}

.cobrar{
position: relative;
margin-top: 25px;
margin-right: 452px;
width: 190px;
height: 40px;
float: left;
}

.ticket{
position: relative;
margin-top: 10px;
float: left;
}

</style>
