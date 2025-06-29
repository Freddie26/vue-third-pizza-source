<script setup>
import {DATA_TRANSFER_PAYLOAD, MOVE} from "@/common/constants";

const props = defineProps({
  draggable: {
    type: Boolean,
    default: false,
  },
  transferData: {
    type: Object,
    required: true,
  }
});

function onDrag({ dataTransfer }) {
  dataTransfer.effectAllowed = MOVE;
  dataTransfer.dropEffect = MOVE;
  dataTransfer.setData(
      DATA_TRANSFER_PAYLOAD,
      JSON.stringify(props.transferData)
  );
}
</script>

<template>
  <div
      :draggable="draggable"
      @dragstart.self="onDrag"
      @dragover.prevent
      @dragenter.prevent
  >
    <slot/>
  </div>
</template>

<style scoped lang="scss">

</style>
