<template>
    <div class="navbar">
        <a-button type="primary" class='mb-4' @click="resetFilter">
            Очистить фильтр
        </a-button>
        <div class='w-100 flex-column mb-4'>
            <p>Страна:</p>
            <a-select
                    class='w-100'
                    show-search
                    @change="onChangeCountry"
                    :value="filters.country"
            >
                <a-select-option v-for="d in countries" :key="d">
                    {{ d }}
                </a-select-option>
            </a-select>
        </div>
        <div class='w-100 flex-column mb-4'>
            <p>Тип:</p>
            <a-select
                    class='w-100'
                    mode="multiple"
                    @change="onChangeType"
                    :value="filters.type"
            >
                <a-select-option v-for="d in types" :key="d">
                    {{ d }}
                </a-select-option>
            </a-select>

        </div>
        <div class='w-100 flex-column mb-4'>
            <p>Звезды:</p>
            <a-checkbox-group
                    class='flex flex-column checkbox-group'
                    name="checkboxgroup"
                    :options="ratings"
                    @change="onChangeStars"
                    :value="filters.rating"
            />
        </div>
        <div class='w-100 flex-column mb-4'>
            <p>Количество отзывов от:</p>
            <a-input-number
                    class='w-100'
                    id="inputNumber"
                    :value="filters.reviews_amount"
                    :min="0"
                    :max="reviews_amounts.length > 0 ? reviews_amounts[0] : 0"
                    @change="onChangeReviews"
            />
        </div>
        <div class='w-100 flex-column mb-4'>
            <p>Цена до:</p>
            <div class='w-100 flex-row mb-4' v-if="min_prices">
                <a-slider
                        v-if="min_prices.length > 0"
                        id="test"
                        class="d-block"
                        :min="min_prices.length > 0 ? min_prices[min_prices.length - 1] : 0"
                        :max="min_prices.length > 0 ? min_prices[0] : 0"
                        @change="onChangeMinPrice"
                        :value="min_price_root"
                        :default-value="min_prices[0]"
                />
            </div>
        </div>

        <a-button type="primary" @click="applyFilter">
            Применить фильр
        </a-button>
    </div>
</template>

<script>
  import Vue from 'vue'
  import {Button} from 'ant-design-vue';
  import {mapState} from "vuex";

  Vue.use(Button);
  export default {
    computed: mapState({
      hotelsList: state => state.main.hotelsList,
      countries: state => state.main.countries,
      types: state => state.main.types,
      ratings: state => state.main.ratings,
      reviews_amounts: state => state.main.reviews_amounts,
      min_prices: state => state.main.min_prices,
      min_price_root: state => state.main.min_price_root,
      filters: state => state.main.filters,
    }),
    methods: {
      resetFilter() {
        this.$store.dispatch('resetFilter')
      },
      applyFilter() {
        this.$store.dispatch('applyFilter')
      },
      onChangeCountry(value) {
        this.$store.dispatch('setFilter', {filterName: 'country', filterValue: value})
      },
      onChangeType(value) {
        this.$store.dispatch('setFilter', {filterName: 'type', filterValue: value})
      },
      onChangeStars(value) {
        this.$store.dispatch('setFilter', {filterName: 'rating', filterValue: value})
      },
      onChangeReviews(value) {
        this.$store.dispatch('setFilter', {filterName: 'reviews_amount', filterValue: value})
      },
      onChangeMinPrice(value) {
        this.$store.dispatch('setFilter', {filterName: 'min_price', filterValue: value})
      }
    }

  }

</script>

<style scoped>
    .navbar {
        padding: 10px;
        width: 35%;
        display: flex;
        flex-direction: column;
        background-color: darkgray;
    }
</style>
