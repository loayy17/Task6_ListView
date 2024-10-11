<template>
  <div>
    <slot name="header"></slot>
    
  </div>
</template>

<script setup lang="ts">
import ListView from "./ListView.vue";
const props = defineProps({
  lists: {
    type: Object,
    require: true,
  },
});
console.log(props.lists)
</script>

<style scoped></style>
