<script setup>
import { computed } from "vue";
import AppDrop from "@/common/components/AppDrop.vue";

const TWO_INGREDIENTS = 2;
const THREE_INGREDIENTS = 3;

const props = defineProps({
  dough: {
    type: String,
    default: "light",
  },
  sauce: {
    type: String,
    default: "tomato",
  },
  ingredients: {
    type: Object,
    default: () => ({}),
  },
});

const emits = defineEmits(["drop"]);

const pizzaIngredients = computed(() => {
  return Object.entries(props.ingredients)
      .reduce(
          (result, entry) => {
            const [key, value] = entry;
            if (value > 0) {
              result[key] = value;
            }

            return result;
          },
          {}
      )
})
</script>

<template>
  <div class="content__constructor">
    <app-drop @drop="emits('drop', $event.value)">
      <div
          class="pizza"
          :class="`pizza--foundation--${dough}-${sauce}`"
      >
        <div class="pizza__wrapper">
          <div
              v-for="(value, key) in pizzaIngredients"
              :key="key"
              class="pizza__filling"
              :class="[
                  `pizza__filling--${key}`,
                  value === TWO_INGREDIENTS && 'pizza__filling--second',
                  value === THREE_INGREDIENTS && 'pizza__filling--third'
              ]"
          />
        </div>
      </div>
    </app-drop>
  </div>
</template>

<style scoped lang="scss">
.content__constructor {
  width: 315px;
  margin-top: 25px;
  margin-right: auto;
  margin-left: auto;
}

.pizza__wrapper {
  width: 100%;
  padding-bottom: 100%;
}

.pizza__filling {
  $bl: &;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;

  &::before,
  &::after {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
    background-image: inherit;
  }

  &--second {
    &::before {
      display: block;
      transform: rotate(45deg);
    }
  }

  &--third {
    &::before {
      display: block;
      transform: rotate(45deg);
    }
    &::after {
      display: block;
      transform: rotate(-45deg);
    }
  }

  &--ananas,
  &--ananas.pizza__filling--second::before,
  &--ananas.pizza__filling--third::after {
    background-image: url("@/assets/img/filling-big/ananas.svg");
  }

  &--bacon,
  &--bacon.pizza__filling--second::before,
  &--bacon.pizza__filling--third::after {
    background-image: url("@/assets/img/filling-big/bacon.svg");
  }

  &--blue_cheese,
  &--blue.pizza__filling--second::before,
  &--blue.pizza__filling--third::after {
    background-image: url("@/assets/img/filling-big/blue_cheese.svg");
  }

  &--cheddar,
  &--cheddar.pizza__filling--second::before,
  &--cheddar.pizza__filling--third::after {
    background-image: url("@/assets/img/filling-big/cheddar.svg");
  }

  &--chile,
  &--chile.pizza__filling--second::before,
  &--chile.pizza__filling--third::after {
    background-image: url("@/assets/img/filling-big/chile.svg");
  }

  &--ham,
  &--ham.pizza__filling--second::before,
  &--ham.pizza__filling--third::after {
    background-image: url("@/assets/img/filling-big/ham.svg");
  }

  &--jalapeno,
  &--jalapeno.pizza__filling--second::before,
  &--jalapeno.pizza__filling--third::after {
    background-image: url("@/assets/img/filling-big/jalapeno.svg");
  }

  &--mozzarella,
  &--mozzarella.pizza__filling--second::before,
  &--mozzarella.pizza__filling--third::after {
    background-image: url("@/assets/img/filling-big/mozzarella.svg");
  }

  &--mushrooms,
  &--mushrooms.pizza__filling--second::before,
  &--mushrooms.pizza__filling--third::after {
    background-image: url("@/assets/img/filling-big/mushrooms.svg");
  }

  &--olives,
  &--olives.pizza__filling--second::before,
  &--olives.pizza__filling--third::after {
    background-image: url("@/assets/img/filling-big/olives.svg");
  }

  &--onion,
  &--onion.pizza__filling--second::before,
  &--onion.pizza__filling--third::after {
    background-image: url("@/assets/img/filling-big/onion.svg");
  }

  &--parmesan,
  &--parmesan.pizza__filling--second::before,
  &--parmesan.pizza__filling--third::after {
    background-image: url("@/assets/img/filling-big/parmesan.svg");
  }

  &--salami,
  &---salami.pizza__filling--second::before,
  &---salami.pizza__filling--third::after {
    background-image: url("@/assets/img/filling-big/salami.svg");
  }

  &--salmon,
  &--salmon.pizza__filling--second::before,
  &--salmon.pizza__filling--third::after {
    background-image: url("@/assets/img/filling-big/salmon.svg");
  }

  &--tomatoes,
  &--tomatoes.pizza__filling--second::before,
  &--tomatoes.pizza__filling--third::after {
    background-image: url("@/assets/img/filling-big/tomatoes.svg");
  }
}

.pizza {
  position: relative;
  display: block;
  box-sizing: border-box;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;

  &--foundation--large-creamy {
    background-image: url("@/assets/img/foundation/big-creamy.svg");
  }

  &--foundation--large-tomato {
    background-image: url("@/assets/img/foundation/big-tomato.svg");
  }

  &--foundation--light-creamy {
    background-image: url("@/assets/img/foundation/small-creamy.svg");
  }

  &--foundation--light-tomato {
    background-image: url("@/assets/img/foundation/small-tomato.svg");
  }
}
</style>
