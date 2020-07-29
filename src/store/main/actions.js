import hotels from "@/API/hotels";

const actions = {
    getAllHotels ({ commit }) {
        commit('setHotels', hotels.hotels)
    },
    setFilter ({ commit }, payload) {
        commit('setNewFilter', payload)
    },
    applyFilter ({ commit }) {
        commit('setApplyFilter')
    },
    resetFilter ({ commit }) {
        commit('setResetFilter')
    },
    nextPage ({ commit }, payload) {
        commit('nextPage', payload)
    },
    previousPage ({ commit }, payload) {
        commit('previousPage', payload)
    },
}

export default actions