export default {
    requests(state, rootGetters) {
        const devId = rootGetters.userId
        console.log(state.requests)
        return state.requests.filter(req => req.devId === devId)
    },
    hasRequests(state, getters) {
        return getters.requests && getters.requests.length > 0
    }
}