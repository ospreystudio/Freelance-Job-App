<template>
  <base-card>
  <h2>Register as Developer Now!</h2>
<register-form @save-data="saveData"></register-form>
  </base-card>
</template>

<script>

import RegisterForm from "./RegisterForm";
export default {
  name: "DevRegistration",
  components: {
    RegisterForm
  },
  methods: {
    saveData(data) {
      this.$store.dispatch('devModule/regDev', data)
    }
  }
}
</script>

<style scoped>

</style>