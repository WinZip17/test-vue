<template>
  <div class="table" >
    <div v-if="isHotels">
      <table border="1" class="w-100">
        <tr>
          <th>Название</th>
          <th>Описание</th>
          <th></th>
        </tr>
        <tr v-for="d in filtersHotelsList" :key="d.id">
          <td>{{d.name}}</td>
          <td>{{d.description}}</td>
          <td>
            <a-button type="primary">
              Забронировать
            </a-button>
          </td>
        </tr>
      </table>
      <div class="d-flex flex-row p-2 flex">
        <a-button type="primary" v-on:click="previousPage(pagination.current_page - 1)">
          <b-icon icon="arrow-left"></b-icon>
        </a-button>
        <div class="mx-2">{{pagination.current_page}} из {{pagination.total_pages}}</div>
        <a-button type="primary" v-on:click="nextPage(pagination.current_page + 1)">
          <b-icon icon="arrow-right"></b-icon>
        </a-button>
      </div>
    </div>
    <div v-if="!isHotels"><h2>Записей не найдено</h2></div>
  </div>

</template>

<script>
import {mapState} from "vuex";
import _ from "lodash"

export default {
  computed: mapState({
    filtersHotelsList: state => _.chunk(state.main.filtersHotelsList, 3)[state.main.pagination.current_page - 1],
    isHotels: state => state.main.filtersHotelsList.length > 0,
    pagination: state => state.main.pagination,
  }),
  methods: {
    nextPage(page) {
      this.$store.dispatch('nextPage', page)
    },
    previousPage(page) {
      this.$store.dispatch('previousPage', page)
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.table {
  padding: 10px;

}

</style>
