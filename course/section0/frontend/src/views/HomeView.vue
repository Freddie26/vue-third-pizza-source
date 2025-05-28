<template>
  <main class="content">
    <form action="#" method="post">

      <div class="content__wrapper">
        <h1 class="title title--big">Конструктор пиццы</h1>

        <div class="content__dough">
          <div class="sheet">
            <h2 class="title title--small sheet__title">Выберите тесто</h2>

            <div class="sheet__content dough">
              <label v-for="item of dough" :key="item.id" class="dough__input">
                <input type="radio" name="dough" :value="item.code" class="visually-hidden">
                <img :src="getImage(item.image)" :alt="item.name">
                <b>{{ item.name }}</b>
                <span>{{ item.description }}</span>
              </label>
            </div>
          </div>
        </div>

        <div class="content__diameter">
          <div class="sheet">
            <h2 class="title title--small sheet__title">Выберите размер</h2>

            <div class="sheet__content diameter">
              <label v-for="size of sizes" :key="size.id" class="diameter__input diameter__input--small">
                <input type="radio" name="diameter" :value="size.code" class="visually-hidden">
                <img :src="getImage(size.image)" :alt="size.name">
                <span>{{ size.name }}</span>
              </label>
            </div>
          </div>
        </div>

        <div class="content__ingredients">
          <div class="sheet">
            <h2 class="title title--small sheet__title">Выберите ингредиенты</h2>

            <div class="sheet__content ingredients">
              <div class="ingredients__sauce">
                <p>Основной соус:</p>

                <label v-for="sauce of sauces" :key="sauce.id" class="radio ingredients__input">
                  <input type="radio" name="sauce" :value="sauce.code">
                  <span>{{ sauce.name }}</span>
                </label>
              </div>

              <div class="ingredients__filling">
                <p>Начинка:</p>

                <ul class="ingredients__list">
                  <li v-for="ingredient of ingredients" :key="ingredient.id" class="ingredients__item">
                    <span class="filling">{{ ingredient.name }}</span>

                    <img :src="getImage(ingredient.image)" :alt="ingredient.name">

                    <div class="counter counter--orange ingredients__counter">
                      <button type="button" class="counter__button counter__button--minus" disabled>
                        <span class="visually-hidden">Меньше</span>
                      </button>
                      <input type="text" name="counter" class="counter__input" value="0">
                      <button type="button" class="counter__button counter__button--plus">
                        <span class="visually-hidden">Больше</span>
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="content__pizza">
          <label class="input">
            <span class="visually-hidden">Название пиццы</span>
            <input type="text" name="pizza_name" placeholder="Введите название пиццы">
          </label>

          <div class="content__constructor">
            <div class="pizza pizza--foundation--big-tomato">
              <div class="pizza__wrapper">
                <div class="pizza__filling pizza__filling--ananas"></div>
                <div class="pizza__filling pizza__filling--bacon"></div>
                <div class="pizza__filling pizza__filling--cheddar"></div>
              </div>
            </div>
          </div>

          <div class="content__result">
            <p>Итого: 0 ₽</p>
            <button type="button" class="button" disabled>Готовьте!</button>
          </div>
        </div>
      </div>
    </form>
  </main>
</template>

<script setup>
import dough from '@/mocks/dough.json';
import ingredients from '@/mocks/ingredients.json';
import sizes from '@/mocks/sizes.json';
import sauces from '@/mocks/sauces.json';

function getImage(image) {
  let path = `../assets/img/${image}`;
  return new URL(path, import.meta.url).href;
}

</script>

<style scoped lang="scss">

</style>
