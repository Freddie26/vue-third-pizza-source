<script setup>

</script>

<template>
  <div class="ingredients__sauce">
    <p>Основной соус:</p>

    <label
        v-for="sauceType in sauceItems"
        :key="sauceType.id"
        class="radio ingredients__input"
    >
      <input type="radio" name="sauce" :value="sauceType.value" />
      <span>{{ sauceType.name }}</span>
    </label>
  </div>
</template>

<style scoped lang="scss">

</style>
