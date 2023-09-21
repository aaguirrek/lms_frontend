import { createApp } from 'vue'
import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      count: 0,
	  lecciones:[{parent:''}]
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
	setLecciones(state,lecciones){
		state.lecciones = lecciones
	}
  }
})

export default store