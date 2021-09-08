<template>
  <h1 class="mt-12 text-xl md:text-6xl font-black text-v-gray-dark text-center">
    Redirecting...
  </h1>
</template>

<script>
export default {
  // middleware: 'onlySettings',

  created() {
    this.$router.push('/settings')
    // console.log(this.$route.path)
    // console.log($this.$nuxt.$route.path)
  },
}
</script>
