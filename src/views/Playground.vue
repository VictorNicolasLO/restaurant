<template>
  <div class="home">
    <IconButton color="#FC5757" :img="bin"/>
    <br>
    <br>
    <Card :title="title" @click="al" :description="description" :img="table"/>
  </div>
</template>

<script>
// @ is an alias to /src

import IconButton from "../components/IconButton.vue";
import Card from "../components/Card.vue";
import bin from "../assets/icons/rubbish-bin.png";
import table from "../assets/icons/dinner-table.png";

export default {
  name: "playground",
  data() {
    return {
      exampleData: "example",
      bin,
      title: "Mesas",
      description: "Proceso principal de sistema",
      table
    };
  },
  methods: {
    al() {
      alert("adsfasdf");
    }
  },
  components: {
    IconButton,
    Card
  }
};
</script>
