<template>
    <div v-for="item in items" >
        <slot :item='item.name'>
        </slot>
    </div>
    <img :src="$attrs.src" alt="Image from Parent" />
</template>

<script setup lang="ts">

const items = [
    {name:'loay5',age:20},
    {name:'loay4',age:30},
    {name:'loay3',age:40},
    {name:'loay2',age:10},
    {name:'loay1',age:50},
]
</script>

<style scoped>

</style>