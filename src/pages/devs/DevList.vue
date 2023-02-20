<template>
<section>
<dev-filter @change-filter="setFilters"></dev-filter>
</section>
  <section>
    <base-card>
    <div class="controls">
      <base-button mode="outline" @click="loadDevs">Refresh</base-button>
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
   async loadDevs() {
      this.isLoading = true
      await this.$store.dispatch('devModule/loadDevs')
     this.isLoading = false
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