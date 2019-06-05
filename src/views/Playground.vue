<template>
  <div class="home">
    
    <Button @click="show" color="#FC5757" text="Eliminar"  />
    <br>
    <Button color="#7ED87C" text="Añadir"  />


  </div>
</template>

<script>
// @ is an alias to /src
// import SearchBox from "../components/SearchBox";
import Button from "../components/Button";

export default {
  name: "playground",
  data() {
    return {

     };

  },
  components: {
    // SearchBox,
    Button
  },
  methods:{
    show(){
      alert("Hola mundo")
    }
  }
};
</script>
