export default {
    devs(state) {
        return state.devs
    },
    hasDev(state) {
        return state.devs && state.devs.length > 0
    },
    isDevs(_1, getters, _2, rootGetter) {
        const devs = getters.devs
        const userId = rootGetter.userId
        return devs.some(dev => dev.id === userId)
    }
}