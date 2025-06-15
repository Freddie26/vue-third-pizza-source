<script setup>
import {DATA_TRANSFER_PAYLOAD} from "@/common/constants";

const emit = defineEmits(['drop']);

function onDrop({ dataTransfer }) {
  if (!dataTransfer) {
    return;
  }
  const payload = dataTransfer.getData(DATA_TRANSFER_PAYLOAD);
  if (payload) {
    const data = JSON.parse(payload);
    emit('drop', data);
  }
}
</script>

<template>
  <div
      @drop.stop="onDrop"
      @dropover.prevent
      @dropenter.prevent
  >
    <slot/>
  </div>
</template>

<style scoped lang="scss">

</style>
