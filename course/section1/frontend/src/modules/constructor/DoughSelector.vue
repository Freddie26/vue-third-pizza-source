<script setup>
import {getImage} from "@/common/helpers";

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  items: {
    type: Array,
    default: () => []
  }
});

const emits = defineEmits(["update:modelValue"])
</script>

<template>
  <div class="content__dough">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите тесто</h2>

      <div class="sheet__content dough">
        <label
            v-for="doughType in items"
            :key="doughType.id"
            class="dough__input"
        >
          <input
              type="radio"
              name="dough"
              :value="doughType.value"
              class="visually-hidden"
              :checked="doughType.value === modelValue"
              @input="emits('update:modelValue', doughType.value)"
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
@import "@/assets/scss/ds-system/ds.scss";
@import "@/assets/scss/mixins/mixins.scss";

.content__dough {
  width: 527px;
  margin-top: 15px;
  margin-right: auto;
  margin-bottom: 15px;
}

.dough__input {
  position: relative;

  margin-right: 8%;
  margin-bottom: 20px;
  padding-left: 50px;

  cursor: pointer;

  img {
    @include p_center-v;

    width: 36px;
    height: 36px;

    transition: 0.3s;

    border-radius: 50%;
  }

  b {
    @include r-s16-h19;
  }

  span {
    @include l-s11-h13;

    display: block;
  }

  &:hover {
    img {
      box-shadow: $shadow-regular;
    }
  }

  input {
    &:checked + img {
      box-shadow: $shadow-large;
    }
  }
}
</style>
