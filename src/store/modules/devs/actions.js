export default {
   async regDev(context, data) {
        const userId = context.rootGetters.userId
        const devData = {
            firstName: data.first,
            lastName: data.last,
            description: data.desc,
            hourlyRate: data.rate,
            areas: data.areas,
        }; context.commit('registerDev', devData)
        const response = await fetch(`https://app-vue-3a8f3-default-rtdb.firebaseio.com/devs/${userId}.json`, {
            method: 'PUT',
            body: JSON.stringify(devData)
        });

        if (!response.ok){
            // err
        } context.commit('registerDev', {
            ...devData,
           id: userId
       })
    },

   async loadDevs(context) {
       const response = await fetch(`https://app-vue-3a8f3-default-rtdb.firebaseio.com/devs.json`);
       const responseData = await response.json()

       if (!response.ok) {
                // errors
       }

       const devs = [];

       for (const key in responseData) {
           const dev = {
               id: key,
               firstName: responseData[key].firstName,
               lastName: responseData[key].lastName,
               description: responseData[key].description,
               hourlyRate: responseData[key].hourlyRate,
               areas: responseData[key].areas,
           }; devs.push(dev)
       } context.commit('setDevs', devs)
   }
}