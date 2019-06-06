<template>
    <div>
    <table>
        <tr>
            <td>Total del Cliente</td><td>{{totalcliente}}</td>
        </tr>
        <tr>
            <td>IVA</td><td>{{iva}}</td>
        </tr>
        <tr>
            <td>Total</td><td>{{total}}</td>
        </tr>
    </table> 
    </div>
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
 
</style> 