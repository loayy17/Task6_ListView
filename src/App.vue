<template>
  <div>
    <br />
    <div v-if="show" class="m-5 border border-1 ActiveList">
      <div v-for="(group, gIndex) in lists" :key="gIndex" :class='"list-group"+gIndex'>
        <div v-if="group.header" class="bg-body-secondary p-2">
          {{ group.header }}
        </div>

        <list-view
          v-for="(list, lIndex) in group.listItems"
          :key="lIndex"
          :marker="list.has_border_left"
          :Label="list.label"
          :border="list.has_border"
          :actionInput="5"
          :disabled="list.disabled"
          :avatar="list.avatar"
          :isActive="list.isActive"
          @is-active="ToggleEvent(gIndex,lIndex)"
        >
          <div>{{ list.isActive }}</div>
          <template v-if="group.header" #header>
            <div class="bg-body-secondary p-2">{{ group.header }}</div>
          </template>
          <template #image="{ img }" v-if="list.avatar"></template>
          <template #Label="{ Label }">
            {{ list.label }}
          </template>
          <template v-if="list.Title" #description>
            <div>{{ list.Title }}</div>
          </template>

          <template v-if="list.Subtitle" #sub-description>
            <div>{{ list.Subtitle }}</div>
          </template>

          <template v-if="list.Date" #Date>
            <div>{{ list.Date }}</div>
          </template>

          <template #action> </template>
        </list-view>
      </div>
    </div>
    <button @click="show = !show">Toggle</button>
  </div>
</template>

<script setup lang="ts">
//Imports
import { ref } from "vue";
import ListView from "./components/ListView.vue";
// Emits
const ToggleEvent = (gIndex :Number | any,lIndex :Number | any)=>{
  lists[gIndex].listItems[lIndex].isActive = true
  let groubList = document.querySelector(`.list-group${gIndex}`)
  groubList?.querySelectorAll('.list-active-item').forEach((el)=>el.classList.remove('list-active-item'))
  groubList?.querySelectorAll('.list-group-item')[lIndex].classList.add('list-active-item')
}

// Variables & Refs
const show = ref(true);
let lists = [
  {
    header: "",
    listItems: [
      {
        border_left: "Primary",
        label: "Item 1 in Group 1",
        has_border: false,
        isctive: false,
        disabled: true,
        Title: "Title for Item 1",
        Subtitle: "This is a subtitle",
        Date: "01/01/2022",
        avatar: {
          src: "https://th.bing.com/th/id/OIP.AbGafkazjc_S1pZPh0B9cQHaIm?rs=1&pid=ImgDetMain",
          shape: 0,
          size: "10%",
        },
      },
      {
        has_border_left: "Danger",
        label: "Item 2 in Group 1",
        has_border: false,
        isActive: true,
        disabled: false,
        Title: "Title for Item 2",
        Subtitle: "Another subtitle here",
        Date: "02/02/2022",
        avatar: {
          src: "https://th.bing.com/th/id/OIP.AbGafkazjc_S1pZPh0B9cQHaIm?rs=1&pid=ImgDetMain",
          shape: 0,
          size: "15%",
        },
      },
    ],
  },
  {
    header: "Group 2",
    listItems: [
      {
        label: "loay",
        has_border_left: "Success",
        has_border: true,
        isActive: true,
        disabled: false,
        Subtitle: "This item was successful",
        Date: "03/03/2022",
      },
      {
        has_border_left: "Warning",
        label: "Item 2 in Group 2",
        has_border: true,
        isActive: false,
        Title: "Warning Item",
        Subtitle: "Be cautious with this one",
        Date: "04/04/2022",
        avatar: {},
      },
      {
        has_border_left: "Info",
        label: "Item 3 in Group 2",
        has_border: true,
        isActive: false,
        Title: "Informative Item",
        Subtitle: "This item contains useful information",
        Date: "05/05/2022",
        
      },
    ],
  },
];
</script>

<style scoped>
.list-active-item {
  background-color: aqua !important;
}
.list-active-item :hover {
  background-color: rgba(0, 255, 255, 0.715) !important;
  border-color: rgb(0, 81, 255) !important;
}
</style>
