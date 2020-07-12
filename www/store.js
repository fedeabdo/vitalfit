Vue.use(Vuex)
 
export default new Vuex.Store({
 state: {
    diaSeleccionado: {
        id: 0,
        nombre: "",
        ejercicios: []
    }
 },
 getters: {

 },
 mutations: {
    updateDiaSeleccionado (state, payload) {
        state.diaSeleccionado = payload
    }
 },
 actions: {

 }
});