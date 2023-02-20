export default {
    registerDev(state, payload) {
        state.devs.push(payload);
    },
    setDevs(state, payload) {
        state.devs = payload
    }
}