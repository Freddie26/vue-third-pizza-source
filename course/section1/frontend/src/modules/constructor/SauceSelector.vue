<script setup>
const model = defineModel();
defineProps({
  items: {
    type: Array,
    default: () => [],
  }
});
</script>

<template>
  <div class="ingredients__sauce">
    <p>Основной соус:</p>

    <label
        v-for="sauceType in items"
        :key="sauceType.id"
        class="radio ingredients__input"
    >
      <input
          type="radio"
          name="sauce"
          :value="sauceType.value"
          :checked="sauceType.value === model"
          @input="model = sauceType.value"
      />
      <span>{{ sauceType.name }}</span>
    </label>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/ds-system/ds.scss";

.ingredients__sauce {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  width: 100%;
  margin-bottom: 14px;

  p {
    @include r-s16-h19;

    margin-top: 0;
    margin-right: 16px;
    margin-bottom: 10px;
  }
}

.ingredients__input {
  margin-right: 24px;
  margin-bottom: 10px;
}
</style>
