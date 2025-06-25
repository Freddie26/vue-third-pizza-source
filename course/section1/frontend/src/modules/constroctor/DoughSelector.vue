<script setup>

</script>

<template>
  <div class="content__dough">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите тесто</h2>

      <div class="sheet__content dough">
        <label
            v-for="doughType in i1tems"
            :key="doughType.id"
            class="dough__input"
        >
          <input
              type="radio"
              name="dough"
              :value="doughType.value"
              class="visually-hidden"
              checked
          />
          <img :src="getImage(doughType.image)" :alt="doughType.name" />

          <b>{{ doughType.name }}</b>
          <span>{{ doughType.description }}</span>
        </label>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>