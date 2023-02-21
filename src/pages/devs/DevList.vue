<template>
  <div>
  <base-dialog :show="!!error" title="An error has occurred" @close="handleError">
    {{ error }}
  </base-dialog>
<section>
<dev-filter @change-filter="setFilters"></dev-filter>
</section>
  <section>
    <base-card>
    <div class="controls">
      <base-button mode="outline" @click="loadDevs(true)">Refresh</base-button>
      <base-button link to="/register" v-if="!isDev">Register as a Developer</base-button>
    </div>
      <div v-if="isLoading">
        <base-spinner></base-spinner>
      </div>
  <ul v-else-if="hasDev">
    <dev-item v-for="dev in filteredList" :key="dev.id" :id="dev.id"
        :first-name="dev.firstName"
        :last-name="dev.lastName"
        :rate="dev.hourlyRate"
        :areas="dev.areas"></dev-item>
  </ul>
    <p v-else>No developers Found</p>
    </base-card>
  </section>
  </div>
</template>

<script>

import DevItem from "../components/DevItem";
import DevFilter from "./DevFilter";
export default {
  name: "DevList",
  components: {
    DevFilter,
    DevItem
  },
  data() {
    return {
      isLoading: false,
      error: null,
    activeFilters: {
      frontend: true,
      backend: true,
      fullstack: true
    }
    }
  },
  computed: {
    filteredList() {
      const devs = this.$store.getters['devModule/devs']
      return devs.filter(dev => {
        if (this.activeFilters.frontend && dev.areas.includes('frontend')) {
          return true
        }
        if (this.activeFilters.backend && dev.areas.includes('backend')) {
          return true
        }
        if (this.activeFilters.fullstack && dev.areas.includes('fullstack')) {
          return true
        }
        return false
      })
    },
    hasDev() {  ``
      return this.$store.getters['devModule/hasDev']
    },
    isDev() {
      return this.$store.getters['devModule/isDevs']
    }

  },
  created() {
    this.loadDevs()
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters
    },
   async loadDevs(refresh = false) {
      this.isLoading = true
     try {
       await this.$store.dispatch('devModule/loadDevs', {forceRefresh: refresh})
     } catch (error) {
        this.error = error.message || 'Some thing went wrong!!!'
     }
     this.isLoading = false
    },
    handleError() {
      this.error = null
    }
  },
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}

</style>