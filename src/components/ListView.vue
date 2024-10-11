<template>
  <div
    :class="{
      'list-active-item': isActive,
      'border border-1': border,
      listStyle: !disabled && !isActive,
      'bg-secondary-subtle': disabled,
      'list-group-item': true,
    }"
    @click.stop="toggleActive"
  >
    <div
      :class="{
        'border-start border-5  d-flex justify-content-between align-items-start p-1': true,
      }"
      :style="{ borderColor: 'aqua' }"
    >
      <slot name="image" :avatar="defaultValues.Avatar">
        <img
          v-if="props.avatar"
          :style="{ width: props.avatar.size || '10%' }"
          :class="{
            'w-3 h-3 br align-self-center border': true,
            'rounded-circle': props.avatar.shape === ShapeOfImageEnum.Circle,
          }"
          :src="props.avatar.src || defaultValues.Avatar.src"
          alt=""
        />
      </slot>
      <div class="ms-2 me-auto">
        <slot name="Label" :Label="defaultValues.Label" class="fw-bold">
          <div>{{ defaultValues.Label }}</div>
        </slot>
        <slot name="description" :description="defaultValues.Title">
          <div>{{ defaultValues.Title }}</div>
        </slot>
        <slot name="sub-description" class="text-secondary"> </slot>
      </div>
      <slot name="action">
        <div class="form-check form-switch align-self-center">
          <div v-if="actionInput === ActionsEnum.Radio">
            <input type="radio" name="radio" />
          </div>
          <div v-if="actionInput === ActionsEnum.CheckBox">
            <input type="checkbox" name="checkbox" />
          </div>
          <div v-if="actionInput === ActionsEnum.Switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
          </div>
          <div v-if="actionInput === ActionsEnum.Info">
            <button class="btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-info-circle-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"
                />
              </svg>
            </button>
          </div>
          <div v-if="actionInput === ActionsEnum.Download">
            <button class="btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-down-square-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0"
                />
              </svg>
            </button>
          </div>
        </div>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
// Imports
import { computed } from "vue";
import type { IListViewProps } from "@/components/domain/def/ListView";
import {
  ActionsEnum,
  ShapeOfImageEnum,
} from "./domain/meta/Enums/ListViewEnum";

// Props & Emits
const props = defineProps<IListViewProps>();
const emit = defineEmits(["is-active"]);
console.log(props.avatar)
// Variables & Ref
const defaultValues = {
  Label: "There is No Label Was Given",
  Action: ActionsEnum.Radio,
  Title: "There is No Title",
  Avatar: {
    src: "https://www.pngall.com/wp-content/uploads/12/Avatar-PNG-Images-HD.png",
    shape: ShapeOfImageEnum.Circle,
    size: "15%",
  },
};

// Computed
const background = computed(() => {
  if (props.marker == "Primary") {
    return "#346cb0";
  } else if (props.marker === "Success") {
    return "#00a28a";
  } else if (props.marker === "Danger") {
    return "#b76ba3";
  } else if (props.marker === "Warning") {
    return "#f7c46c";
  } else if (props.marker === "Info") {
    return "#0179a8";
  } else if (props.marker === "dark") {
    return "#363642";
  } else {
    return "transparent";
  }
});
const actionInput = computed(() => {
  return props.actionInput;
});


//Methods
const toggleActive = () => {
  if (!props.disabled) {
    emit("is-active", props.isActive);
  }
};
</script>


<style scoped>
.border-start {
  border-color: v-bind(background) !important;
}
.listStyle :hover {
  cursor: pointer !important;
  background-color: #f6f7f9 !important;
}

.btn :hover {
  color: green;
}
</style>
