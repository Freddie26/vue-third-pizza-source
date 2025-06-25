<script setup>

</script>

<template>
  <div class="ingredients__filling">
    <p>Начинка:</p>

    <ul class="ingredients__list">
      <li
          v-for="ingredientType in ingredientItems"
          :key="ingredientType.id"
          class="ingredients__item"
      >
        <div class="filling">
          <img
              :src="getImage(ingredientType.image)"
              :alt="ingredientType.name"
          />
          {{ ingredientType.name }}
        </div>

        <div class="counter counter--orange ingredients__counter">
          <button
              type="button"
              class="counter__button counter__button--minus"
              disabled
          >
            <span class="visually-hidden">Меньше</span>
          </button>
          <input
              type="text"
              name="counter"
              class="counter__input"
              value="0"
          />
          <button
              type="button"
              class="counter__button counter__button--plus"
          >
            <span class="visually-hidden">Больше</span>
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">

</style>
