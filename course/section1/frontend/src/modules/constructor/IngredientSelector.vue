<script setup>
import {getImage} from "@/common/helpers";
import {MAX_INGREDIENT_COUNT} from "@/common/constants";
import AppDrag from "@/common/components/AppDrag.vue";

const props = defineProps({
  values: {
    type: Object,
    default: () => ({}),
  },
  items: {
    type: Array,
    default: () => [],
  },
});

const emits = defineEmits(['update'])

function getValue(ingredient) {
  return props.values[ingredient] ?? 0;
}

function setValue(ingredient, count) {
  emits('update', ingredient, Number(count));
}

function increment(ingredient) {
  setValue(ingredient, getValue(ingredient) + 1);
}

function decrement(ingredient) {
  setValue(ingredient, getValue(ingredient) - 1);
}

function inputValue(ingredient, count) {
  setValue(ingredient, Math.min(MAX_INGREDIENT_COUNT, count))
}
</script>

<template>
  <div class="ingredients__filling">
    <p>Начинка:</p>

    <ul class="ingredients__list">
      <li
          v-for="ingredientType in items"
          :key="ingredientType.id"
          class="ingredients__item"
      >
        <app-drag
            :transfer-data="ingredientType"
            :draggable="getValue(ingredientType.value) < MAX_INGREDIENT_COUNT"
        >
          <div class="filling">
            <img
                :src="getImage(ingredientType.image)"
                :alt="ingredientType.name"
            />
            {{ ingredientType.name }}
          </div>
        </app-drag>

        <div class="counter counter--orange ingredients__counter">
          <button
              type="button"
              class="counter__button counter__button--minus"
              :disabled="getValue(ingredientType.value) === 0"
              @click="decrement(ingredientType.value)"
          >
            <span class="visually-hidden">Меньше</span>
          </button>
          <input
              type="text"
              name="counter"
              class="counter__input"
              :value="getValue(ingredientType.value)"
              @input="inputValue(ingredientType.value, $event.target.value)"
          />
          <button
              type="button"
              class="counter__button counter__button--plus"
              :disabled="getValue(ingredientType.value) >= MAX_INGREDIENT_COUNT"
              @click="increment(ingredientType.value)"
          >
            <span class="visually-hidden">Больше</span>
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/ds-system/ds.scss";
@import "@/assets/scss/mixins/mixins.scss";

.ingredients__filling {
  width: 100%;

  p {
    @include r-s16-h19;

    margin-top: 0;
    margin-bottom: 16px;
  }
}

.ingredients__list {
  @include clear-list;

  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
}

.ingredients__item {
  width: 100px;
  min-height: 40px;
  margin-right: 17px;
  margin-bottom: 35px;
}

.ingredients__counter {
  width: 54px;
  margin-top: 10px;
  margin-left: 36px;
}

.counter {
  display: flex;

  justify-content: space-between;
  align-items: center;
}

.counter__button {
  $el: &;
  $size_icon: 50%;

  position: relative;

  display: block;

  width: 16px;
  height: 16px;
  margin: 0;
  padding: 0;

  cursor: pointer;
  transition: 0.3s;

  border: none;
  border-radius: 50%;
  outline: none;

  &--minus {
    background-color: $purple-100;

    &::before {
      @include p_center-all;

      width: $size_icon;
      height: 2px;

      content: "";

      border-radius: 2px;
      background-color: $black;
    }

    &:hover:not(:active):not(:disabled) {
      background-color: $purple-200;
    }

    &:active:not(:disabled) {
      background-color: $purple-300;
    }

    &:focus:not(:disabled) {
      box-shadow: $shadow-regular;
    }

    &:disabled {
      cursor: default;

      &::before {
        opacity: 0.1;
      }
    }
  }

  &--plus {
    background-color: $green-500;

    &::before {
      @include p_center-all;

      width: $size_icon;
      height: 2px;

      content: "";

      border-radius: 2px;
      background-color: $white;
    }

    &::after {
      @include p_center-all;

      width: $size_icon;
      height: 2px;

      content: "";
      transform: translate(-50%, -50%) rotate(90deg);

      border-radius: 2px;
      background-color: $white;
    }

    &:hover:not(:active):not(:disabled) {
      background-color: $green-400;
    }

    &:active:not(:disabled) {
      background-color: $green-600;
    }

    &:focus:not(:disabled) {
      box-shadow: $shadow-regular;
    }

    &:disabled {
      cursor: default;

      opacity: 0.3;
    }
  }

  &--orange {
    background-color: $orange-200;

    &:hover:not(:active):not(:disabled) {
      background-color: $orange-100;
    }

    &:active:not(:disabled) {
      background-color: $orange-300;
    }
  }
}

.counter__input {
  @include r-s14-h16;

  box-sizing: border-box;
  width: 22px;
  margin: 0;
  padding: 0 3px;

  text-align: center;

  color: $black;
  border: none;
  border-radius: 10px;
  outline: none;
  background-color: transparent;

  &:focus {
    box-shadow: inset $shadow-regular;
  }
}

.filling {
  @include r-s14-h16;

  position: relative;

  display: block;

  padding-left: 36px;

  img {
    @include p_center-v;

    display: block;

    width: 32px;
    height: 32px;

    box-sizing: border-box;
    padding: 4px;

    border-radius: 50%;
  }
}
</style>
