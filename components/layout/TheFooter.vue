<template>
  <div>
    <nuxt-link to="" class="">About us</nuxt-link>

    <div>
      <nuxt-link to="" class="">Privacy policy</nuxt-link>

      <span class="mx-2 font-bold">&middot;</span>

      <nuxt-link to="" class="">Terms</nuxt-link>
    </div>

    <p class="">© Heroshe {{ yearRange }}</p>

    <p>ver {{ appVersion }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      appVersion: 0.23,
    }
  },

  computed: {
    yearRange() {
      if (new Date().getFullYear() > 2021) {
        return `2021 - ${new Date().getFullYear()}`
      }
      return new Date().getFullYear()
    },
  },
}
</script>

<style scoped>
</style>
