import Vue from 'vue'
import Vuex from 'vuex'
import main from "@/store/main";
Vue.use(Vuex)



const store = new Vuex.Store({
    modules: {
        main: main,
    }
})

export default store