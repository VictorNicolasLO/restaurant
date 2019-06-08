<template>
  <table cellspacing="0" :style="setWidth">
    <tr>
      <th v-for="(head,i) in headers" :key="i">{{head.title}}</th>
    </tr>
    <tr v-for="(item,i) in items" :key="i">
      <td v-for="(head,i) in headers" :key="i">
        <span v-if="head.prop=='actions'">
          <span
            class="action"
            v-for="(action, index) in (item[head.prop] || item[head.title])"
            :key="index"
          >
            <IconButton
              :img="action.img"
              :color="action.color"
              :tooltip="action.tooltip"
              @click="action.onClick"
            />
          </span>
        </span>
        <span v-else>{{item[head.prop] || item[head.title]}}</span>
      </td>
    </tr>
  </table>
</template>


<script>
import IconButton from "./IconButton";
export default {
  props: {
    width: String,
    headers: [],
    items: []
  },
  computed: {
    setWidth: function() {
      return {
        width: this.width
      };
    }
  },
  components: {
    IconButton
  }
};
</script>

<style scoped>
th {
  color: #918d8d;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-align: left;
}

td,
th {
  text-align: left;
  padding: 10px 0;
  border-bottom: 0.5px solid #9c9c9c;
}
.action {
  padding: 5px;
  box-sizing: border-box;
}
</style>

