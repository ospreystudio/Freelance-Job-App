export default {
        contactDev(context, payload) {
            const newRequest = {
                id: new Date().toISOString(),
                devId: payload.devId,
                userEmail: payload.email,
                message: payload.message
            }; context.commit('addRequest', newRequest)
        }

}