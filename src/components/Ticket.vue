<template>
    
    <table class="tabla">
        <tr>
            <td class="totalctes">Total del Cliente:</td><td class="tot">$ {{totalcliente}} MXN</td>
        </tr>
        <tr>
            <td class="ivas">IVA:</td><td class="ivax">$ {{iva}} MXN</td>
        </tr>
        <tr>
            <td class="totals">Total:</td><td class="full">$ {{total}} MXN</td>
        </tr>
    </table> 
</template>

<script>
export default {
    name:"Ticket",
    props:{
        totalcliente:Number,
        iva:Number,
        total: Number
  }
};
</script>

<style scope>
     .chica{
        font-size : 10px;
    }
    .izquierda{
        text-align : left;
    }
    .derecha{
        text-align : right;
    }
    .full{
        width: 123px;
        height: 23px;
        left: 840px;
        top: 688px;
        text-align:right;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 23px;

        color: #000000;
    }
    .tabla{
        /*border-radius:4px ;
        border: 1px solid lightgray;
        margin: 0 auto;
        */
        
        
        height: 76px;

        background: #FFFFFF;
        border: 1px solid #BFBFBF;
        box-sizing: border-box;
        border-radius: 5px;
    }
    .totalctes{
        
        width: 113px;
        height: 19px;
        left: 646px;
        top: 648px;
        text-align : left;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        /* identical to box height */

        color: #918D8D;
    }
    .totals{
        width: 72px;
        height: 10px;
        left: 646px;
        top: 689px;
        text-align : left;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 23px;
        color: #000000;
    }
    .ivas{
        width: 44px;
        height: 8px;
        left: 649px;
        top: 668px;
        text-align : left;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: normal;
        font-size: 17px;
        line-height: 20px;

        color: #000000;
    }
    .ivax{
        width: 135px;
        height: 9px;
        left: 864px;
        top: 669px;
        text-align : right;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: normal;
        font-size: 17px;
        line-height: 20px;

        color: #000000;
    }
    .tot{
        width: 113px;
        height: 20px;
        left: 855px;
        top: 647px;
        text-align : right;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: normal;
        font-size: 17px;
        line-height: 20px;
    }
</style> 